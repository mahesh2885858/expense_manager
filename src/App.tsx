import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router";
import AddEntry from "./components/AddEntry/AddEntry";
import Home from "./components/Home/Home";
import NavBar from "./components/navbar/NavBar";
import Reducer from "./components/Reducer/Reducer";
import SingleEntryDetails from "./components/singleEntryDetails/SingleEntryDetails";
import State from "./components/state/State";
import { actionTypes } from "./components/Reducer/Reducer";
import "./app.scss";

function App() {
  const [state, dispatch] = useReducer(Reducer, State);
  const navigate = useNavigate();
  const onInputChange = (data: string, field: string) => {
    dispatch({ type: actionTypes.onInput, payload: data, field });
  };
  const AddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: actionTypes.addEntry, payload: "" });
  };
  const goToEntryDetails = (id: string) => {
    navigate(`/entry/${id}`);
  };
  const setEditItem = (id: string) => {
    dispatch({ type: actionTypes.setEditItem, payload: id });
    navigate("/addentry");
  };
  const DeleteItem = (id: string) => {
    dispatch({ type: actionTypes.delete, payload: id });
    navigate("/");
  };
  const OnSortChange = (data: string) => {
    dispatch({ type: actionTypes.setSortText, payload: data });
    dispatch({ type: actionTypes.sortArray, payload: data });
  };
  return (
    <div className="App">
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                goToEntryDetails={goToEntryDetails}
                state={state}
                OnSortChange={OnSortChange}
              />
            }
          />
          <Route
            path="/addentry"
            element={
              <AddEntry
                AddExpense={AddExpense}
                onInputChange={onInputChange}
                state={state.singleEntry}
              />
            }
          />
          <Route
            path="/entry/:id"
            element={
              <SingleEntryDetails
                DeleteItem={DeleteItem}
                setEditItem={setEditItem}
                state={state.MainState}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
