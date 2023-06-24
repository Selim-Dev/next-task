import { create } from 'zustand';

const initialState = {
	"status": "under review",
	"type": "pending",
	"custodianDetails":{},
	"otherInformation":{},
	"certification": "",
	"createdAt": null,
}
const useCustodianForm = create((set) => ({
  form: initialState,
  update: (data) => set((state)=>({ form: { ...state.form, ...data } })),
  reset: () => set(()=>({ form: initialState }))
}));


export default useCustodianForm;
