import * as THREE from "three";

import { OrbitControls } from "@react-three/drei";

const Controls = () => {
    const minPan = new THREE.Vector3(-1, 0, -1);
    const maxPan = new THREE.Vector3(1, 0.5, 1);

    const handleControlChange = (e) => {
        const control = e.target;

        control.target.x = THREE.MathUtils.clamp(
            control.target.x,
            minPan.x,
            maxPan.x,
        );

        control.target.y = THREE.MathUtils.clamp(
            control.target.y,
            minPan.y,
            maxPan.y,
        );

        control.target.z = THREE.MathUtils.clamp(
            control.target.z,
            minPan.z,
            maxPan.z,
        );
    };

    return (
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
            onChange={handleControlChange}
        />
    );
};

export default Controls;
