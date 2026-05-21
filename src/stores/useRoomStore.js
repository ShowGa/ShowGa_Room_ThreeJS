import { create } from "zustand";

export const useRoomStore = create((set) => ({
    isScreenFocus: false,

    toggleScreenFocus: () => {
        set((state) => ({
            isScreenFocus: !state.isScreenFocus,
        }));
    },
}));
