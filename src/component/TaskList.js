import React, { useContext } from "react";
import { Context } from "../utils/constant";

const TaskList = ({
  state,
  dispatch,
}) => {
  
  const consumedData = useContext(Context);
  const editList = (field) => {
    dispatch({
      type: "selectedcart",
      payload: field,
    });
    consumedData.setModal({ ...consumedData.modal, showEditModal: true });
  };

  const deletehandler = (id) => {
    consumedData.setModal({ ...consumedData.modal, showDeletModal: true });
    dispatch({
      type: "selectedcart",
      payload: id,
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <button
            className="btn btn-outline-dark"
            onClick={() =>  consumedData.setModal({ ...consumedData.modal, showAddModal: true })}
          >
            Add Tasks
          </button>
          <h1>Task List</h1>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {state.contacts.map((field, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{field.name}</td>
                    <td>{field.email}</td>
                    <td>{field.number}</td>
                    <td>
                      <button
                        onClick={() => editList(field)}
                        className="btn btn-small btn-primary mx-2"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-small btn-primary btn-danger"
                        onClick={() => deletehandler(field.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
