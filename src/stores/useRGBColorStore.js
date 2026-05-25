import { create } from "zustand";

export const useRGBColorStore = create((set) => ({
    hologramRGB: "#ffffff",

    setHologramRGB: (color) => {
        set(() => ({
            hologramRGB: color,
        }));
    },
}));
