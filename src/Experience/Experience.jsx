import * as THREE from "three";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Controls from "./controls/Controls";

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
                <PerspectiveCamera
                    makeDefault
                    position={[
                        5.709385543646104, 6.195849850444702,
                        4.9797350076613585,
                    ]}
                />

                <Controls />

                <Scene />
            </Canvas>
        </>
    );
};

export default Experience;
