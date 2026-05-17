const VideoScreenMesh = ({ vidInfo }) => {
    return (
        <mesh
            key={vidInfo.key}
            geometry={vidInfo.node.geometry}
            position={vidInfo.position}
            rotation={vidInfo.rotation ? vidInfo.rotation : [0, 0, 0]}
        >
            <meshBasicMaterial map={vidInfo.videoTexture} toneMapped={false} />
        </mesh>
    );
};

export default VideoScreenMesh;
