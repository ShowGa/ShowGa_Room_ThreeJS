import * as THREE from "three";

// shader
import hologramVertexShader from "../../shaders/hologram/vertex.glsl";
import hologramFragmentShader from "../../shaders/hologram/fragment.glsl";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Hologram = () => {
    const materialRef = useRef();

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }
    });

    return (
        <mesh position={[0.566, 0.58, -0.059]} scale={[0.1, 0.1, 0.1]}>
            <sphereGeometry args={[1, 32, 32]} />
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
