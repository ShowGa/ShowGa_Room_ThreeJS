import { useGLTF } from "@react-three/drei";

import PictureFrames from "../component/PictureFrames";
import BakedScene from "../component/BakedScene";
import VideoScreens from "../component/VideoScreens";
import IFrameScreen from "../component/IFrameScreen";

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

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.HologramProjector_Emission.geometry}
                material={nodes.HologramProjector_Emission.material}
                position={[0.566, 0.386, -0.059]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Emission_Keyboard.geometry}
                material={nodes.Emission_Keyboard.material}
                position={[-1.267, 0.607, -0.352]}
                rotation={[0, -Math.PI / 6, Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Emission_Fridge.geometry}
                material={nodes.Emission_Fridge.material}
                position={[-1.354, 0.708, 0.388]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Emission_WallEdge_1.geometry}
                material={nodes.Emission_WallEdge_1.material}
                position={[0.032, 1.069, -1.498]}
                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Emission_WallEdge_2.geometry}
                material={nodes.Emission_WallEdge_2.material}
                position={[-1.748, 1.069, -0.032]}
                rotation={[0, 0, Math.PI / 2]}
            />
        </group>
    );
}

useGLTF.preload("/ShowGa_Room.glb");

/*
========= Object Data ==========


*/
