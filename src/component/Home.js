import React, { useReducer, useState } from "react";
import { ContextProvider, Data } from "../utils/constant";

//component
import AddList from "./AddList";
import Delete from "./Delete";
import Edit from "./Edit";
import TaskList from "./TaskList";

const Home = () => {
  const initialState = {
    contacts: Data,
    selected: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "add":
        return {
          ...state,
          contacts: action.payload,
        };
      case "selectedcart":
        return {
          ...state,
          selected: action.payload,
        };
      case "update":
        return {
          ...state,
          selected: "",
        };
      case "delete":
        const filterproducts = state?.contacts.filter(
          (item) => item.id !== action.payload
        );
        return {
          ...state,
          contacts: filterproducts,
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const defaultForm = {
    name: "",
    email: "",
    number: "",
  };

  const [form, setForm] = useState(defaultForm);

  const [modal, setModal] = useState({
    showEditModal: false,
    showAddModal: false,
    showDeletModal: false,
  });

  const onSubmitData = (e, form) => {
    e.preventDefault();
    if (modal?.showAddModal) {
      const addtask = [...state.contacts, form];
      dispatch({ type: "add", payload: addtask });
      setModal({ ...modal, showAddModal: false, showEditModal: false });
    } else if (modal?.showEditModal) {
      const update_obj = state.contacts.findIndex(
        (contact) => contact.id === state.selected.id
      );
      state.contacts[update_obj] = form;
      dispatch({ type: "update" });
      setModal({ ...modal, showEditModal: false });
    } else {
      dispatch({
        type: "delete",
        payload: state.selected,
      });
      setModal({ ...modal, showDeletModal: false });
    }
  };

  return (
    <div className="container">
      <ContextProvider value={{ form, setForm, onSubmitData, modal, setModal }}>
        <TaskList state={state} dispatch={dispatch} />
        <AddList />
        <Edit state={state} />
        <Delete />
      </ContextProvider>
    </div>
  );
};

export default Home;
