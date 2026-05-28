import { useGLTF } from "@react-three/drei";

import PictureFrames from "../component/PictureFrames";
import BakedScene from "../component/BakedScene";
import VideoScreens from "../component/VideoScreens";
import IFrameScreen from "../component/IFrameScreen";
import Hologram from "../component/Hologram";
import Emission from "../component/Emission";
import RainbowRGBMesh from "../component/RainbowRGBMesh";

export function Room(props) {
    const { nodes, materials } = useGLTF("/models/ShowGa_Room.glb");
    // console.log("dick");

    return (
        <group {...props} dispose={null}>
            {/* ======= Baked Scene ======= */}
            <BakedScene nodes={nodes} />

            {/* ======= Picture Frame ======= */}
            <PictureFrames
                nodes={nodes}
                images={[
                    "/texture/cyberpunk2077.jpg",
                    "/texture/overwatch.avif",
                    "/texture/sdv.jpg",
                ]}
            />

            {/* ======= Video Screen ======= */}
            <VideoScreens nodes={nodes} />

            {/* ======= iframe screen ======= */}
            <IFrameScreen />

            {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fridge_Glass.geometry}
                material={nodes.Fridge_Glass.material}
                position={[-1.332, 0.708, 0.388]}
                scale={0.375}
            /> */}

            {/* ======= Hologram ======= */}
            <Hologram />

            {/* ======= Emission Mesh ======= */}
            <Emission nodes={nodes} />

            {/* ======= RainbowRGB Mesh ======= */}
            <RainbowRGBMesh nodes={nodes} />
        </group>
    );
}

useGLTF.preload("/ShowGa_Room.glb");

/*
========= Object Data ==========


*/
