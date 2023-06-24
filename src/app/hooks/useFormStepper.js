import { create } from 'zustand';

const useFormStepper = create((set) => ({
  step: 1,
  next: () => set((state)=>({ step: state.step + 1 })), //set({ step: (state.step + 1
	back: () => set((state)=>({ step: state.step - 1 })),
	reset: () => set((state)=>({ step: 1 })),
	set: (step) => set((state)=>({ step: step })),
}));


export default useFormStepper;