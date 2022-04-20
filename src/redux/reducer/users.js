import { SET_USERS } from "./constants";

const initialState = {
  users: [],
};

const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return { ...state, users: [...state.users, payload] };
    default:
      return state;
  }
};

export default users;
