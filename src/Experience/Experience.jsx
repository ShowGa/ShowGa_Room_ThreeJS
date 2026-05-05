import * as THREE from "three";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const Experience = () => {
    return (
        <>
            <Canvas
                gl={{
                    outputColorSpace: THREE.SRGBColorSpace,
                    toneMapping: THREE.AgXToneMapping,
                }}
            >
                <PerspectiveCamera
                    makeDefault
                    position={[
                        5.709385543646104, 6.195849850444702,
                        4.9797350076613585,
                    ]}
                />
                <OrbitControls />

                <Scene />
            </Canvas>
        </>
    );
};

export default Experience;
