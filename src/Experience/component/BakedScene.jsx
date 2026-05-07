import useSRGBTexture from "../../hooks/useSRGBTexture";

const BakedScene = ({ nodes, textureUrls }) => {
    const bakedTextures = useSRGBTexture(textureUrls, false);

    const textureCollections = [
        {
            key: "first_collection",
            node: nodes.Floor_Wood,
            position: [-0.032, 0.068, -0.032],
        },
        {
            key: "second_collection",
            node: nodes.Cube017,
            position: [-1.535, 0.673, -0.402],
        },
    ];

    return textureCollections.map((textureCollection, i) => (
        <mesh
            castShadow
            receiveShadow
            geometry={textureCollection.node.geometry}
            position={textureCollection.position}
        >
            <meshBasicMaterial map={bakedTextures[i]} />
        </mesh>
    ));
};

export default BakedScene;
