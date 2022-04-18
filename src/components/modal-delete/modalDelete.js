import { useDispatch } from "react-redux";

import './modalDelete.css';

const ModalClose = ({active, setActive, id}) => {

    const dispatch = useDispatch();

    const deleteItems = () => {
      const deleteId = {
        ids: id,
      };
      
      setActive(false);
      dispatch({ type: "DELETE_ITEM", payload: deleteId });
    };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-delete__content">
        <button className="button-ok"
        onClick={() => deleteItems()}>
          Да
        </button>
        <button className="button-cancel"
        onClick={() => setActive(false)}>
          Нет
        </button>
      </div>
    </div>
  );
}

export default ModalClose;
