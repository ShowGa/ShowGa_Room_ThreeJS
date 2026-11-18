import { useCallback, useEffect, useState } from "react";

const useFullScreen = () => {
    const [isFullScreen, setIsFullScreen] = useState(
        !!document.fullscreenElement,
    );

    const toggleFullScreen = useCallback(async (enable) => {
        if (enable) {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
            }
        } else {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
            }
        }
    }, []);

    useEffect(() => {
        const handleChange = () => {
            setIsFullScreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleChange);
        };
    }, []);

    return {
        isFullScreen,
        toggleFullScreen,
    };
};

export default useFullScreen;
