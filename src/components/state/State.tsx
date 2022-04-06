export type AppItem = {
  description: string;
  category: string;
  date: string;
  note: string;
  id: string;
  amount: string;
};
export type stateType = {
  MainState: AppItem[];
  singleEntry: AppItem;
  error: string;
  isEditOn: boolean;
  editId: string;
  sortBy: string;
};
const State: stateType = {
  MainState: [],
  singleEntry: {
    description: "",
    category: "",
    date: "",
    note: "",
    id: "",
    amount: "",
  },
  error: "",
  isEditOn: false,
  editId: "",
  sortBy: "",
};
export default State;
