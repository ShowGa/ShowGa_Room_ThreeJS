import useSRGBTexture from "../../hooks/useSRGBTexture";
import { useRoomStore } from "../../stores/useRoomStore";

const images = [
    "/texture/cyberpunk2077.webp",
    "/texture/overwatch.avif",
    "/texture/sdv.webp",
];

const PictureFrames = ({ nodes }) => {
    const textures = useSRGBTexture(images, false);
    const setFocusObj = useRoomStore((state) => state.setFocusObj);

    // 點選任一幅海報 → 鏡頭拉近到海報牆(三幅共用一個視角)
    const handlePosterClick = (e) => {
        e.stopPropagation();
        setFocusObj("poster");
    };

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
            onClick={handlePosterClick}
            onPointerOver={() => {
                document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
                document.body.style.cursor = "auto";
            }}
        >
            <meshBasicMaterial map={textures[i]} />
        </mesh>
    ));
};

export default PictureFrames;
