import { Html } from "@react-three/drei";
import { useRoomStore } from "../../stores/useRoomStore";
import { objectFocusData } from "../../constants/objectFocusData";

// YouTube 影片 ID(在 .env 設 VITE_YOUTUBE_VIDEO_ID),沒設時用 fallback
const YOUTUBE_VIDEO_ID =
    import.meta.env.VITE_YOUTUBE_VIDEO_ID || "dQw4w9WgXcQ";

// 自動播放需 mute=1(瀏覽器會擋掉非靜音的 autoplay);loop 需配合 playlist 指定同一支
const YOUTUBE_EMBED_URL =
    `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}` +
    `&controls=1&playsinline=1&rel=0`;

const IFrameScreen = () => {
    const focusObj = useRoomStore((state) => state.focusObj);

    return (
        <Html
            wrapperClass="html-screen"
            transform
            // occlude="blending"
            distanceFactor={1.17}
            position={[0.55, 1.051, -1.394]}
            zIndexRange={[1, 0]}
            scale={0.44}
            style={{
                pointerEvents: `${focusObj === objectFocusData.movie_screen.id ? "" : "none"}`,
            }}
        >
            <iframe
                src={YOUTUBE_EMBED_URL}
                allow="autoplay; encrypted-media; clipboard-write"
                allowFullScreen
            />
        </Html>
    );
};

export default IFrameScreen;

/*
======= To - Do =======
- make iframe unhoverable when unfocusing

*/

/* 

<mesh
    castShadow
    receiveShadow
    geometry={nodes.MovieScreen.geometry}
    material={nodes.MovieScreen.material}
    position={[0.549, 1.057, -1.394]}
/> 



https://iframetester.com/#:~:text=iframetester.com%20is%20the%20easiest%20way%20to%20test%20if,particular%20webpage%20can%20be%20embedded%20in%20an%20iframe.

*/
