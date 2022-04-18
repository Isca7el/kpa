import { useDispatch } from "react-redux";

const DeleteBtn = ({id}) => {
  console.log(id);
  const dispatch = useDispatch();

  const deleteItems = () => {
    const deleteId = {
      ids: id
    }

    dispatch({type: "DELETE_ITEM", payload: deleteId})
  }
    return (
        <button className="delete" onClick={() => deleteItems()}>
        Удалить
      </button>
    )
}

export default DeleteBtn;