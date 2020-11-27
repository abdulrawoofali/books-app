import BooKApi from "../../api-helpers/bookApi";
import loadNonFiction from "./actionCreator";

export function loadAllNonFictionalTrendingBooks() {
    //console.log("Books api calling..... for Fictinal books..");
    return function(dispatch) {
      return BooKApi.getNonFictionalTrendingBooks().then(books => {
       // console.log("books Api recived data calling actionCretaor with Payload from nonFiction => ",books);
        dispatch(loadNonFiction(books));
      }).catch(error => {
        throw(error);
      });
    };
  }

  