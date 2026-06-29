import * as THREE from "three";
import { useRoomStore } from "../../stores/useRoomStore";

// 透明的點擊區:疊在大螢幕 / PC 螢幕上,點選切換鏡頭視角(滑鼠與手機皆透過 pointer 事件觸發)
const FocusHitboxes = ({ nodes }) => {
    const setFocusObj = useRoomStore((state) => state.setFocusObj);
    const focusObj = useRoomStore((state) => state.focusObj);

    const hitboxes = [
        {
            key: "movie_screen", // 大螢幕下方的 PS5:點它拉近看大螢幕(模型沒有獨立 PS5 節點,用 box 當點擊區)
            box: [0.35, 0.2, 0.35], // [寬, 高, 深]
            position: [0.549, 0.45, -1.25],
            focusId: "movie_screen",
        },
        {
            key: "pc_monitor", // PC 螢幕(主螢幕)
            node: nodes.Monitor_Main,
            position: [-1.526, 0.899, -0.4],
            focusId: "pc_monitor",
        },
        {
            key: "pc_monitor_side", // PC 側螢幕:與主螢幕共用視角(一次看到兩個螢幕)
            node: nodes.Monitor_Side,
            position: [-1.436, 0.899, -0.889],
            focusId: "pc_monitor",
        },
    ];

    const handleFocus = (focusId) => (e) => {
        e.stopPropagation();
        setFocusObj(focusId);
    };

    // zoom in(聚焦到大螢幕)後,讓它的點擊區停用 raycast,使滑鼠能穿透去操作 YouTube
    const noopRaycast = () => null;

    return hitboxes.map((hitbox) => (
        <mesh
            key={hitbox.key}
            // 指定 plane / box 就用自訂幾何,否則沿用模型 geometry
            geometry={
                hitbox.plane || hitbox.box ? undefined : hitbox.node.geometry
            }
            position={hitbox.position}
            rotation={hitbox.rotation ? hitbox.rotation : [0, 0, 0]}
            raycast={
                hitbox.focusId === "movie_screen" && focusObj === "movie_screen"
                    ? noopRaycast
                    : undefined
            }
            onClick={handleFocus(hitbox.focusId)}
            onPointerOver={() => {
                document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
                document.body.style.cursor = "auto";
            }}
        >
            {hitbox.plane && <planeGeometry args={hitbox.plane} />}
            {hitbox.box && <boxGeometry args={hitbox.box} />}

            {/* 完全透明,只作為 raycaster 命中用;雙面確保整面都能命中 */}
            <meshBasicMaterial
                transparent
                opacity={0}
                depthWrite={false}
                side={THREE.DoubleSide}
            />
        </mesh>
    ));
};

export default FocusHitboxes;
