import { useContext } from "react";
import { Context } from "../utils/constant";
import PopupModal from "./Modal";

const Delete = () => {
  const data = useContext(Context);
  return (
    <div>
      <PopupModal
        showModal={data.modal.showDeletModal}
        value="Are you sure you want to delete this? This action cannot be undone. Please click Yes to confirm or Cancel to go back."
        showForm={false}
      />
    </div>
  );
};

export default Delete;
