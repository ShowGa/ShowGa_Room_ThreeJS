import * as THREE from "three";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

// shader
import hologramVertexShader from "../../shaders/hologram/vertex.glsl";
import hologramFragmentShader from "../../shaders/hologram/fragment.glsl";

const MODEL_PATH = {
    suzanne: { path: "/models/suzanne.glb", modelName: "Suzanne" },
};

const Hologram = () => {
    const { Model } = useControls("Choose hologram model", {
        Model: {
            value: "suzanne",
            options: {
                suzanne: "suzanne",
            },
        },
    });

    const meshRef = useRef();
    const materialRef = useRef();

    const { nodes } = useGLTF(MODEL_PATH[Model].path);

    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }

        if (meshRef.current) {
            meshRef.current.rotation.y += delta;
        }
    });

    return (
        <mesh
            ref={meshRef}
            geometry={nodes[MODEL_PATH[Model].modelName].geometry}
            position={[0.566, 0.58, -0.059]}
            scale={[0.1, 0.1, 0.1]}
        >
            <shaderMaterial
                ref={materialRef}
                vertexShader={hologramVertexShader}
                fragmentShader={hologramFragmentShader}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                side={THREE.DoubleSide}
                uniforms={{
                    uTime: { value: 0 },
                }}
            />
        </mesh>
    );
};

export default Hologram;

/*

<mesh
    castShadow
    receiveShadow
    geometry={nodes.HologramProjector_Emission.geometry}
    material={nodes.HologramProjector_Emission.material}
    position={[0.566, 0.386, -0.059]}
/>

*/
