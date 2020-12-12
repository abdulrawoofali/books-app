import {combineReducers} from 'redux';
import bookReducer from '../trendingBooksRedux/reducer';
import userReducer from "../userRedux/reducer"
import genreBookReducer from "../BookByGenre/reducer"
// import fictionReducer from "../FictionBookRedux/reducer";
// import nonFictionReducer from "../NonFictionBookRedux/reducer";
 
const rootReducer = combineReducers({
  // short hand property names
  bookReducer,
  userReducer,
  genreBookReducer
  
})

export default rootReducer;