import { createStore, applyMiddleware, compose } from "redux"

import rootReducer from "./reducers";

const initialState = {};

const middlewares = [
    //Middlewares go here

];

export default createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);