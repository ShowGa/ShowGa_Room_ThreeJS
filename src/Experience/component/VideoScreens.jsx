import VideoScreenMesh from "./VideoScreenMesh";

const VideoScreens = ({ nodes }) => {
    const videosInfo = [
        {
            key: "monitor_main",
            node: nodes.Monitor_Main,
            position: [-1.526, 0.899, -0.4],
            rotation: null,
            videoTexture: "/texture/xqc_desk_foot_slam_opti.mp4",
        },
        {
            key: "monitor_side",
            node: nodes.Monitor_Side,
            position: [-1.436, 0.899, -0.889],
            rotation: null,
            videoTexture: "/texture/xqc_retard_dog_opti.mp4",
        },
        // {
        //     key: "movie_screen",
        //     node: nodes.MovieScreen,
        //     position: [0.549, 1.057, -1.394],
        //     rotation: [0, 0, Math.PI],
        //     videoTexture: videoTexture,
        // },
    ];

    return videosInfo.map((vidInfo, i) => (
        <VideoScreenMesh vidInfo={vidInfo} />
    ));
};

export default VideoScreens;

/*

========= Object Data =========
<mesh
    castShadow
    receiveShadow
    geometry={nodes.Monitor_Main.geometry}
    material={nodes.Monitor_Main.material}
    position={[-1.526, 0.899, -0.4]}
/>
<mesh
    castShadow
    receiveShadow
    geometry={nodes.Monitor_Side.geometry}
    material={nodes.Monitor_Side.material}
    position={[-1.436, 0.899, -0.889]}
/>
<mesh
    castShadow
    receiveShadow
    geometry={nodes.MovieScreen.geometry}
    material={nodes.MovieScreen.material}
    position={[0.549, 1.057, -1.394]}
/>

*/
