import { useState } from "react";
import ModalClose from "../modal-delete/modalDelete";

const DeleteBtn = ({ id }) => {
  const [modalActive, setModalActive] = useState(false);
 
  return (
    <>
      <button
        className="delete"
        onClick={() => setModalActive(true)}

      >
        Удалить
      </button>
      <ModalClose id={id} active={modalActive} setActive={setModalActive}/>
    </>
  );
};

export default DeleteBtn;
