import { useState } from "react";
import Modal from "../modal/modal";

const AddBtn = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <button
        className="add"
        onClick={() => {
          setModalActive(true);
        }}
      >
        Добавить
      </button>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default AddBtn;
