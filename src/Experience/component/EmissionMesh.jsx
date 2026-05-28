import { useEffect, useRef } from "react";

const EmissionMesh = ({ objData }) => {
    const materialRef = useRef();

    useEffect(() => {
        materialRef.current?.emissive.set(objData.colorState);
    }, [objData.colorState]);

    return (
        <mesh
            geometry={objData.node.geometry}
            position={objData.position}
            rotation={objData.rotation || [0, 0, 0]}
        >
            <meshStandardMaterial
                ref={materialRef}
                emissiveIntensity={3}
                toneMapped={false}
            />
        </mesh>
    );
};

export default EmissionMesh;

/*
(1, 0, 0)導致emissiveIntensity沒效果


*/
