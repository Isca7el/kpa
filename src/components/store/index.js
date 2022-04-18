import { applyMiddleware, createStore } from "redux";
import items from "../reducer/reducer";
import createSagaMiddleware from "@redux-saga/core";
import { fetchWatcher } from "../saga/sagaFetch";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(items, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchWatcher)