import * as THREE from "three";

import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useRoomStore } from "../../stores/useRoomStore";

// Constants data
import { objectFocusData } from "../../constants/objectFocusData";

// 鏡頭飛行(zoom in/out)的逼近速度,越小越慢、阻尼感越強
const FOCUS_LERP_SPEED = 1.2;

const Controls = () => {
    const controlRef = useRef();
    const isTransitioning = useRef(false);
    const { camera } = useThree();
    const focusObj = useRoomStore((state) => state.focusObj);

    // limit the pan movement
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

    // camera focus feature
    const desiredCameraPos = useRef(new THREE.Vector3());
    const desiredCameraTargetPos = useRef(new THREE.Vector3());

    useEffect(() => {
        if (!focusObj) return;

        desiredCameraPos.current.copy(objectFocusData[focusObj].cameraPos);
        desiredCameraTargetPos.current.copy(
            objectFocusData[focusObj].cameraTargetPos,
        );

        isTransitioning.current = true;
    }, [focusObj]);

    useFrame((_, delta) => {
        if (!isTransitioning.current) return;

        camera.position.lerp(desiredCameraPos.current, FOCUS_LERP_SPEED * delta);

        controlRef.current.target.lerp(
            desiredCameraTargetPos.current,
            FOCUS_LERP_SPEED * delta,
        );

        // check if the camera and target are close to desired position then change isTransitioning state
        const cameraDistance = camera.position.distanceTo(
            desiredCameraPos.current,
        );

        const targetDistance = controlRef.current.target.distanceTo(
            desiredCameraTargetPos.current,
        );

        if (cameraDistance < 0.02 && targetDistance < 0.02) {
            isTransitioning.current = false;
        }

        controlRef.current.update();
    });

    return (
        <>
            <OrbitControls
                ref={controlRef}
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
        </>
    );
};

export default Controls;
