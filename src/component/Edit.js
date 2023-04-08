import { useContext } from "react";
import { Context } from "../utils/constant";
import PopupModal from "./Modal";

const Edit = ({
  state,
}) => {
  const data = useContext(Context)
  return (
    <div>
      <PopupModal
        showModal={data.modal.showEditModal}
        value="Edit Contact"
        state={state}
        showForm={true}
      />
    </div>
  );
};

export default Edit;
