const VideoScreenMesh = ({ vidInfo }) => {
    // 順時針 90 度
    // videoTexture.rotation = vidInfo.adjust.rotation;
    // videoTexture.rotation = Math.PI / 2;

    // 反轉
    // videoTexture.repeat.x = vidInfo.adjust.repeat;
    // videoTexture.repeat.x = -1;

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
