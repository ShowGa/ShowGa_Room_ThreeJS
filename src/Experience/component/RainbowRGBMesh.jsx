import rainbowRGBVertexShader from "../../shaders/rainbowRGB/vertex.glsl";
import rainbowRGBFragmentShader from "../../shaders/rainbowRGB/fragment.glsl";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RainbowRGBMesh = ({ nodes }) => {
    const materialRef = useRef();

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
        }),
        [],
    );

    useFrame((state) => {
        if (!materialRef.current) return;

        materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    });

    return (
        <mesh
            geometry={nodes.Emission_Keyboard.geometry}
            position={[-1.2675, 0.607, -0.353]}
            rotation={[0, -Math.PI / 6, Math.PI / 2]}
        >
            <shaderMaterial
                ref={materialRef}
                vertexShader={rainbowRGBVertexShader}
                fragmentShader={rainbowRGBFragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default RainbowRGBMesh;
