import * as THREE from "three";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

// shader
import hologramVertexShader from "../../shaders/hologram/vertex.glsl";
import hologramFragmentShader from "../../shaders/hologram/fragment.glsl";
import { useRGBColorStore } from "../../stores/useRGBColorStore";

const MODEL_PATH = {
    suzanne: {
        path: "/models/suzanne.glb",
        modelName: "Suzanne",
        scale: [0.1, 0.1, 0.1],
        position: [0.566, 0.58, -0.059],
    },
    LOD3spShape: {
        path: "/models/duck.glb",
        modelName: "LOD3spShape",
        scale: [0.001, 0.001, 0.001],
        position: [0.566, 0.48, -0.059],
    },
    moai: {
        path: "/models/moai.glb",
        modelName: "moai",
        scale: [0.0015, 0.0015, 0.0015],
        position: [0.566, 0.54, -0.059],
    },
};

useGLTF.preload(MODEL_PATH.suzanne.path);
useGLTF.preload(MODEL_PATH.LOD3spShape.path);
useGLTF.preload(MODEL_PATH.moai.path);

// 點選切換時的循環順序(對應 MODEL_PATH 的 key)
const MODEL_ORDER = ["suzanne", "moai", "LOD3spShape"];

const Hologram = () => {
    // leva
    const [{ Model }, setModelControl] = useControls(
        "Choose hologram model",
        () => ({
            Model: {
                value: "suzanne",
                options: {
                    suzanne: "suzanne",
                    moai: "moai",
                    duck: "LOD3spShape",
                },
            },
        }),
    );

    // 點選 hologram → 切換到下一個 model(滑鼠與手機皆透過 pointer 事件觸發)
    const handleHologramClick = (e) => {
        e.stopPropagation();

        const currentIndex = MODEL_ORDER.indexOf(Model);
        const nextModel = MODEL_ORDER[(currentIndex + 1) % MODEL_ORDER.length];

        setModelControl({ Model: nextModel });
    };

    // ref
    const meshRef = useRef();
    const materialRef = useRef();

    const { nodes: suzanneNodes } = useGLTF(MODEL_PATH.suzanne.path);
    const { nodes: duckNodes } = useGLTF(MODEL_PATH.LOD3spShape.path);
    const { nodes: moaiNodes } = useGLTF(MODEL_PATH.moai.path);
    const allNodes = useMemo(
        () => ({
            suzanne: suzanneNodes,
            LOD3spShape: duckNodes,
            moai: moaiNodes,
        }),
        [suzanneNodes, duckNodes, moaiNodes],
    );

    const hologramRGB = useRGBColorStore((state) => state.hologramRGB);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColor: { value: new THREE.Color("#ffffff") },
        }),
        [],
    );

    // function
    const updateColorUniform = () => {
        const shaderUniform = materialRef.current.uniforms;

        shaderUniform.uColor.value.set(hologramRGB);
    };

    useFrame((state, delta) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
        }

        if (meshRef.current) {
            meshRef.current.rotation.y += delta;
        }
    });

    useEffect(() => {
        if (!materialRef.current) return;

        updateColorUniform();
    }, [hologramRGB]);

    return (
        <mesh
            ref={meshRef}
            geometry={allNodes[Model][MODEL_PATH[Model].modelName].geometry}
            position={MODEL_PATH[Model].position}
            scale={MODEL_PATH[Model].scale}
            onClick={handleHologramClick}
            onPointerOver={() => {
                document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
                document.body.style.cursor = "auto";
            }}
        >
            <shaderMaterial
                ref={materialRef}
                vertexShader={hologramVertexShader}
                fragmentShader={hologramFragmentShader}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                side={THREE.DoubleSide}
                uniforms={uniforms}
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
