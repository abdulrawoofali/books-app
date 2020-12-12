import { createStore, combineReducers ,applyMiddleware} from "redux";
import userReducer from "../userRedux/reducer";
import thunk from 'redux-thunk'
import trendingBookReducer from "../trendingBooksRedux/reducer"
import { composeWithDevTools } from 'redux-devtools-extension'


const rootReducer = combineReducers({
  userReducer: userReducer,
  trendingBookReducer:trendingBookReducer
});

export default createStore(rootReducer,composedEnhancer);
