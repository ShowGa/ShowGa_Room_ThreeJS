import { useRoomStore } from "../../../stores/useRoomStore";

export default function DarkModeToggle() {
    const isDarkMode = useRoomStore((state) => state.isDarkMode);
    const toggleDarkMode = useRoomStore((state) => state.toggleDarkMode);

    return (
        <div className="dark-mode-toggle">
            <span className="dark-mode-toggle__label">Dark Mode</span>

            <button
                type="button"
                role="switch"
                aria-checked={isDarkMode}
                className={`dark-mode-toggle__switch ${
                    isDarkMode ? "is-on" : ""
                }`}
                onClick={toggleDarkMode}
            >
                <span className="dark-mode-toggle__knob" />
            </button>
        </div>
    );
}
