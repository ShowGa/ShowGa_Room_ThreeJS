import { useEffect, useState } from "react";
import { Html } from "@react-three/drei";

// 每個可點擊物件的位置與說明泡泡
const HINTS = [
    {
        key: "movie_screen",
        position: [0.549, 0.65, -1.25],
        text: "點 PS5 拉近看大螢幕",
    },
    {
        key: "pc_monitor",
        position: [-1.526, 1.15, -0.4],
        text: "點我拉近看電腦",
    },
    {
        key: "poster",
        position: [-1.2, 1.7, -1.4],
        text: "點海報拉近觀看",
    },
    {
        key: "hologram",
        position: [0.566, 0.78, -0.059],
        text: "點我切換模型",
    },
];

const HintBubbles = () => {
    const [visible, setVisible] = useState(false);
    const [hiding, setHiding] = useState(false);

    // HintBubbles 只在場景載入完成後才會被 render,掛載後延遲顯示讓 LoadingPage 先淡出
    useEffect(() => {
        const showTimer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(showTimer);
    }, []);

    // 顯示後 3 秒,開始監聽滑鼠/觸控移動,一偵測到就淡出隱藏泡泡
    useEffect(() => {
        if (!visible) return;

        let cleanupListeners = () => {};
        let removeTimer;

        const armTimer = setTimeout(() => {
            const hide = () => {
                setHiding(true); // 先播淡出動畫
                removeTimer = setTimeout(() => setVisible(false), 600);
            };
            window.addEventListener("mousemove", hide, { once: true });
            window.addEventListener("touchstart", hide, { once: true });

            cleanupListeners = () => {
                window.removeEventListener("mousemove", hide);
                window.removeEventListener("touchstart", hide);
            };
        }, 3000);

        return () => {
            clearTimeout(armTimer);
            clearTimeout(removeTimer);
            cleanupListeners();
        };
    }, [visible]);

    if (!visible) return null;

    return HINTS.map((hint) => (
        <Html
            key={hint.key}
            position={hint.position}
            center
            zIndexRange={[100, 0]}
            // 不用 distanceFactor:所有泡泡維持固定螢幕大小、視覺一致
            // 泡泡只是提示,不攔截點擊(讓點擊穿透到物件)
            style={{ pointerEvents: "none" }}
        >
            <div
                className={`hint-bubble ${
                    hint.tail === "left" ? "hint-bubble--tail-left" : ""
                } ${hiding ? "hint-bubble--hiding" : ""}`}
                style={hint.offsetX ? { marginLeft: `${hint.offsetX}px` } : undefined}
            >
                {hint.text}
            </div>
        </Html>
    ));
};

export default HintBubbles;
