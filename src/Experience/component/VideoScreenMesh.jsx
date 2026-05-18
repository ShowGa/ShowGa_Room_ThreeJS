import { useVideoTexture } from "@react-three/drei";

const VideoScreenMesh = ({ vidInfo }) => {
    const videoTexture = useVideoTexture(vidInfo.videoTexture);
    videoTexture.center.set(0.5, 0.5);
    videoTexture.rotation = Math.PI / 2;
    videoTexture.repeat.x = -1;

    return (
        <mesh
            key={vidInfo.key}
            geometry={vidInfo.node.geometry}
            position={vidInfo.position}
            rotation={vidInfo.rotation ? vidInfo.rotation : [0, 0, 0]}
        >
            <meshBasicMaterial map={videoTexture} toneMapped={false} />
        </mesh>
    );
};

export default VideoScreenMesh;
