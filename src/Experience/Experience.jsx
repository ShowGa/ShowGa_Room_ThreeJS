import * as THREE from "three";

import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Controls from "./controls/Controls";
import LevaPanel from "./controls/LevaPanel";

const Experience = () => {
    return (
        <>
            <Canvas
                style={{ background: "#202025" }}
                gl={{
                    outputColorSpace: THREE.SRGBColorSpace,
                    toneMapping: THREE.NoToneMapping,
                    // toneMappingExposure: 1.5,
                }}
            >
                <PerspectiveCamera makeDefault position={[2.94, 1.5, 3.0]} />

                <Controls />

                <Scene />
            </Canvas>

            <LevaPanel />
        </>
    );
};

export default Experience;
