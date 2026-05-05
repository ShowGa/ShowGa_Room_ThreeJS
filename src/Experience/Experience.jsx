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
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.5,
                }}
            >
                <PerspectiveCamera
                    makeDefault
                    position={[
                        5.709385543646104, 6.195849850444702,
                        4.9797350076613585,
                    ]}
                />
                <OrbitControls
                    enableDamping
                    enablePan
                    enableZoom
                    screenSpacePanning
                    rotateSpeed={0.15}
                    zoomSpeed={0.5}
                    dampingFactor={0.04}
                    minAzimuthAngle={0}
                    maxAzimuthAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />

                <Scene />
            </Canvas>
        </>
    );
};

export default Experience;
