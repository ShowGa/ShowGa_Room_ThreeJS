import { Leva, useControls } from "leva";

// Leva control store
import { useRoomStore } from "../../stores/useRoomStore";
import { objectFocusData } from "../../constants/objectFocusData";

// hooks
import { useEffect } from "react";
import useFullScreen from "../../hooks/useFullScreen";

const LevaPanel = () => {
    const setFocusObj = useRoomStore((state) => state.setFocusObj);

    const { isFullScreen, toggleFullScreen } = useFullScreen();

    const [, set] = useControls("Display Settings", () => ({
        Fullscreen: {
            value: isFullScreen,
            label: "Fullscreen",
            onChange: (v) => {
                toggleFullScreen(v);
            },
        },
    }));

    useControls(
        "Object Interaction",
        {
            Focus_Object: {
                value: "reset",
                options: {
                    PC_Monitor: objectFocusData.pc_monitor.id,
                    Movie_Screen: objectFocusData.movie_screen.id,
                    Reset_Camera: objectFocusData.reset.id,
                },

                onChange: (v) => {
                    setFocusObj(v);
                },
            },
        },
        [],
    );

    useEffect(() => {
        // deal with the keyboard controlling fullscreen sync problem
        set({ Fullscreen: isFullScreen });
    }, [isFullScreen, set]);

    return <Leva />;
};

export default LevaPanel;
