import { create } from "zustand";

type useProModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// global state control for opening and closing the modal
export const useProModal = create<useProModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
