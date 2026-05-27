import { create } from "zustand";

export const useRGBColorStore = create((set) => ({
    hologramRGB: "#ffffff",
    fridgeRGB: "#ffffff",
    wallEdgeRGB: "#ffffff",

    setHologramRGB: (color) => {
        set(() => ({
            hologramRGB: color,
        }));
    },
    setFridgeRGB: (color) => {
        set(() => ({
            fridgeRGB: color,
        }));
    },
    setWallEdgeRGB: (color) => {
        set(() => ({
            wallEdgeRGB: color,
        }));
    },
}));
