import { combineReducers } from "redux";
import { testReducer } from "./testReducer";

export default combineReducers({
    //Reducers go here
    test: testReducer,

});