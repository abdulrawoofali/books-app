import {createStore, applyMiddleware} from 'redux';
import rootReducer from "../components/redux/rootReducer/rootReducer";
import thunk from 'redux-thunk';

export default () =>{
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}