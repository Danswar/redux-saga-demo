import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const initialState = {};

//Get saga middleware object
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    //Middlewares go here
    //..
    sagaMiddleware,
];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

//Run saga middleware
sagaMiddleware.run(rootSaga);


export default store;