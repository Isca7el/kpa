import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducer from '../reducer/reducers';

import rootSaga from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;
