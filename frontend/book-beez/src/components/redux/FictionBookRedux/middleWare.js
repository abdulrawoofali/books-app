import BooKApi from "../../api-helpers/bookApi";
import loadFiction from "./actionCreator";

export function loadAllFictionalTrendingBooks() {
    //console.log("Books api calling..... for Fictinal books..");
    return function(dispatch) {
      return BooKApi.getFictionalTrendingBooks().then(books => {
        //console.log("books Api recived data calling actionCretaor with Payload => ",books);
        dispatch(loadFiction(books));
      }).catch(error => {
        throw(error);
      });
    };
  }
  