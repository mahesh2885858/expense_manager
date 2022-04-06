import React from "react";
import { AppItem } from "../state/State";
import "./addentry.scss";
type propsType = {
  state: AppItem;
  onInputChange: (data: string, field: string) => void;
  AddExpense: (e: React.FormEvent) => void;
};
const AddEntry = (props: propsType) => {
  return (
    <div className="addentry-container">
      <h1>Add an Expense</h1>
      <form onSubmit={(e) => props.AddExpense(e)} action="">
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            onChange={(e) => props.onInputChange(e.target.value, "description")}
            value={props.state.description}
            id="description"
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            value={props.state.category}
            onChange={(e) => props.onInputChange(e.target.value, "category")}
            name="category"
            id="category"
          >
            <option value="">Select</option>
            <option value="bills">Bills</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            value={props.state.date}
            onChange={(e) => props.onInputChange(e.target.value, "date")}
            name="date"
            id="date"
          />
        </div>
        <div>
          <label htmlFor="note">Note:</label>
          <input
            value={props.state.note}
            onChange={(e) => props.onInputChange(e.target.value, "note")}
            type="text"
            id="note"
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            value={props.state.amount}
            onChange={(e) => props.onInputChange(e.target.value, "amount")}
            type="number"
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddEntry;
