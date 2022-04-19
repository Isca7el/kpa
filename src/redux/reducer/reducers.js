import { combineReducers } from "redux";
import list from "./list";
import users from "./users";

const reducer = combineReducers({
    list, 
    users,
})

export default reducer;