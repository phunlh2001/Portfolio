
import { create } from 'zustand';

type ProjectFocusState = {
  focusedProjectIndex: number | null;
  setFocusedProjectIndex: (index: number | null) => void;
};

export const useProjectFocusStore = create<ProjectFocusState>((set) => ({
  focusedProjectIndex: null,
  setFocusedProjectIndex: (index) => set({ focusedProjectIndex: index }),
}));
