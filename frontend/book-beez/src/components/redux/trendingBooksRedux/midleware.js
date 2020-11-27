import {LOAD_BOOKS_FROM_DB} from "./actionConstants"
import {loadBooksSuccess} from"./actionCreator"
import BooKApi from "../../api-helpers/bookApi";

export function loadAllTrendingBooks() {
    //console.log("Books api calling.....");
    return function(dispatch) {
      return BooKApi.getTrendingBooks().then(books => {
        //console.log("books Api recived data calling actionCretaor with Payload => ",books);
        dispatch(loadBooksSuccess(books));
      }).catch(error => {
        throw(error);
      });
    };
  }

 












  
//   export async function fetchTodos(dispatch, getState) {
//     const response = await axois.get(MAIN_URL+FETCHBOOKS);
//     dispatch(loadBooks(response.data))
//   }