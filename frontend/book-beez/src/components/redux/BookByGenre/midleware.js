import {loadBooksByGenreSuccess} from"./actionCreator"
import BooKApi from "../../api-helpers/bookApi";

export function loadAllBooksByGenre() {
    //console.log("Books api calling.....");
    return function(dispatch) {
     // console.log("Loading books by genere.....");
      return BooKApi.getBooksByGenre().then(books => {
        //console.log("books Api recived data calling actionCretaor with Payload => ",books);
        dispatch(loadBooksByGenreSuccess(books));
      }).catch(error => {
        throw(error);
      });
    };
  }
