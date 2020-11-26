  
import { createStore, combineReducers } from "redux";
import userReducer from "./userRedux/reducer";


const rootReducer = combineReducers({
    userReducer,
});

export default createStore(rootReducer);