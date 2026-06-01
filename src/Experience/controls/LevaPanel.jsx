import { Leva, useControls } from "leva";

// Leva control store
import { useRoomStore } from "../../stores/useRoomStore";
import { objectFocusData } from "../../constants/objectFocusData";

const LevaPanel = () => {
    const setFocusObj = useRoomStore((state) => state.setFocusObj);

    useControls("Object Interaction", {
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
    });

    return <Leva />;
};

export default LevaPanel;
