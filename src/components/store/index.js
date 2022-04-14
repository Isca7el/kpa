import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import items from "../reducer/reducer";

export const store = createStore(items, composeWithDevTools());