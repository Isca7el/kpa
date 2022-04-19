import { ADD_ITEM, DELETE_ITEM } from "./constants";

const initialState = {
  list: [],
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter(
          (item) => !action.payload.ids.includes(item.id)
        ),
      };
    default:
      return state;
  }
};

export default list;
