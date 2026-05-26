import vertexShader from "../../shaders/emission-ish/vertex.glsl";
import fragmentShader from "../../shaders/emission-ish/fragment.glsl";

const EmissionMesh = ({ objData }) => {
    return (
        <mesh
            key={objData.key}
            geometry={objData.node.geometry}
            position={objData.position}
            rotation={objData.rotation ? objData.rotation : [0, 0, 0]}
        >
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />
        </mesh>
    );
};

export default EmissionMesh;
