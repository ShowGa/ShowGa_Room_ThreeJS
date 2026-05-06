import useSRGBTexture from "../../hooks/useSRGBTexture";

const PictureFrames = ({ nodes, images }) => {
    const textures = useSRGBTexture(images, false);

    console.log(nodes.Picture_Left.geometry);

    const frames = [
        {
            key: "left",
            node: nodes.Picture_Left,
            position: [-1.517, 1.441, -1.4],
            rotation: [1.452, 0, 0],
        },
        {
            key: "mid",
            node: nodes.Picture_Mid,
            position: [-1.198, 1.442, -1.4],
            rotation: [1.452, 0, 0],
        },
        {
            key: "right",
            node: nodes.Picture_Right,
            position: [-0.879, 1.444, -1.403],
            rotation: [1.466, 0, 0],
        },
    ];

    return frames.map((frame, i) => (
        <mesh
            key={frame.key}
            castShadow
            receiveShadow
            geometry={frame.node.geometry}
            position={frame.position}
            rotation={frame.rotation}
        >
            <meshBasicMaterial map={textures[i]} />
        </mesh>
    ));
};

export default PictureFrames;
