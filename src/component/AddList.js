import { useContext } from "react";
import { Context } from "../utils/constant";
import PopupModal from "./Modal";

const AddList = () => {
  const data = useContext(Context)
  return (
    <div>
      <PopupModal
        showModal={data.modal.showAddModal}
        value="Add Contact"
        showForm={true}
      />
    </div>
  );
};

export default AddList;
