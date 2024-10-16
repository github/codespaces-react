import { applyMiddleware, createStore } from "redux";
import todoReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import todoSaga from "./saga";

const sagaMiddleWare = createSagaMiddleware();

const todoStore = createStore(
    todoReducer,
    applyMiddleware(sagaMiddleWare),
);

sagaMiddleWare.run(todoSaga);
export default todoStore;