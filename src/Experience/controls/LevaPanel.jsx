import { Leva, useControls } from "leva";

// Leva control store
import { useRoomStore } from "../../stores/useRoomStore";

const LevaPanel = () => {
    const setFocusObj = useRoomStore((state) => state.setFocusObj);

    useControls("Object Interaction", {
        Focus_Object: {
            value: "reset",
            options: {
                PC_Monitor: "pc_monitor",
                Movie_Screen: "movie_screen",
                Reset_Camera: "reset",
            },

            onChange: (v) => {
                setFocusObj(v);
            },
        },
    });

    return <Leva />;
};

export default LevaPanel;
