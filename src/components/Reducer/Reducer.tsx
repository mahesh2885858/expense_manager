import { stateType } from "../state/State";
import uniqid from "uniqid";
type actionType = {
  type: string;
  payload: string;
  field?: string;
};
export const actionTypes = {
  onInput: "ON_INPUT",
  setEditItem: "SET_EDIT_ITEM",
  addEntry: "ADD_ENTRY",
  delete: "DELETE",
  setSortText: "SET_SORT_TEXT",
  sortArray: "SORT_ARRAY",
};
const Reducer = (state: stateType, action: actionType): stateType => {
  switch (action.type) {
    case actionTypes.onInput:
      return {
        ...state,
        singleEntry: { ...state.singleEntry, [action.field!]: action.payload },
      };
    case actionTypes.setEditItem:
      const itemToEdit = state.MainState.filter(
        (entry) => entry.id === action.payload
      );
      return {
        ...state,
        editId: action.payload,
        isEditOn: true,
        singleEntry: {
          ...state.singleEntry,
          description: itemToEdit[0].description,
          category: itemToEdit[0].category,
          date: itemToEdit[0].date,
          note: itemToEdit[0].note,
          amount: itemToEdit[0].amount,
          id: itemToEdit[0].id,
        },
      };
    case actionTypes.addEntry:
      if (state.isEditOn) {
        const itemsAfterEdit = state.MainState.map((entry) => {
          if (entry.id === state.editId) {
            return { ...entry, ...state.singleEntry };
          } else {
            return entry;
          }
        });
        console.log(itemsAfterEdit);
        return {
          ...state,
          MainState: itemsAfterEdit,
          isEditOn: false,
          editId: "",
        };
      } else {
        const newEntry = { ...state.singleEntry, id: uniqid() };
        return { ...state, MainState: [...state.MainState, newEntry] };
      }
    case actionTypes.delete:
      const ItemsAfterDeleting = state.MainState.filter(
        (entry) => entry.id !== action.payload
      );
      return { ...state, MainState: ItemsAfterDeleting };
    case actionTypes.setSortText:
      return { ...state, sortBy: action.payload };
    case actionTypes.sortArray:
      if (state.sortBy === "date") {
        state.MainState.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
      } else if (state.sortBy === "amount") {
        state.MainState.sort((a, b) => parseInt(a.amount) - parseInt(b.amount));
      }

      return state;
    default:
      return state;
  }
};
export default Reducer;
