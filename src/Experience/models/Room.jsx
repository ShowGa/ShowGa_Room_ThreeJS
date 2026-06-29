import { useGLTF } from "@react-three/drei";

import PictureFrames from "../component/PictureFrames";
import BakedScene from "../component/BakedScene";
import VideoScreens from "../component/VideoScreens";
import IFrameScreen from "../component/IFrameScreen";
import FocusHitboxes from "../component/FocusHitboxes";
import HintBubbles from "../component/HintBubbles";
import Hologram from "../component/Hologram";
import Emission from "../component/Emission";
import RainbowRGBMesh from "../component/RainbowRGBMesh";
import GlassMesh from "../component/GlassMesh";

export function Room(props) {
    const { nodes, materials } = useGLTF("/models/ShowGa_Room.glb");
    // console.log("dick");

    return (
        <group {...props} dispose={null}>
            {/* ======= Baked Scene ======= */}
            <BakedScene nodes={nodes} />

            {/* ======= Picture Frame ======= */}
            <PictureFrames nodes={nodes} />

            {/* ======= Video Screen ======= */}
            <VideoScreens nodes={nodes} />

            {/* ======= iframe screen ======= */}
            <IFrameScreen />

            {/* ======= Focus Hitboxes (點選螢幕切換視角) ======= */}
            <FocusHitboxes nodes={nodes} />

            {/* ======= Hint Bubbles (可點擊物件的泡泡說明) ======= */}
            <HintBubbles />

            {/* ======= Fridge Glass ======= */}
            {/* <GlassMesh nodes={nodes} /> */}

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
