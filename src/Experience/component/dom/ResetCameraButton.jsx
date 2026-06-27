import { useRoomStore } from "../../../stores/useRoomStore";

export default function ResetCameraButton() {
    const focusObj = useRoomStore((state) => state.focusObj);
    const setFocusObj = useRoomStore((state) => state.setFocusObj);

    // 尚未聚焦(null)或已是 reset 狀態時不顯示
    if (!focusObj || focusObj === "reset") return null;

    return (
        <button
            type="button"
            className="reset-camera-button"
            onClick={() => setFocusObj("reset")}
        >
            Reset Camera
        </button>
    );
}
