import { create } from "zustand";

export const useRoomStore = create((set) => ({
    focusObj: null,

    setFocusObj: (obj) => {
        set(() => ({
            focusObj: obj,
        }));
    },

    isDarkMode: false,

    toggleDarkMode: () => {
        set((state) => ({
            isDarkMode: !state.isDarkMode,
        }));
    },
}));
