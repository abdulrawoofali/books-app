import * as consts  from "./api-constants"
import axois from "axios"

export default class BooksApi{

    static getTrendingBooks(){
        //console.log("fecthing....");
        return ( axois.get(consts.DB_URL+consts.TREDNING_BOOKS).then(res => {
            //console.log("response from server ....",res);
            return res.data;
        }).catch(err => {return err;})

        )
    }
    static getNonFictionalTrendingBooks(){
        //console.log("fetching Non fictional books.....");
        return ( axois.get(consts.DB_URL+consts.NON_FICTION_TRENDING_BOOKS).then(res => {
            //console.log("response from server ....",res);
            return res.data;
        }).catch(err => {return err;})

        )
    }

    static getFictionalTrendingBooks(){
        //console.log("fetching Non fictional books.....");
        return ( axois.get(consts.DB_URL+consts.FICTION_TRENDING_BOOKS).then(res => {
            //console.log("response from server ....",res);
            return res.data;
        }).catch(err => {return err;})

        )
    }
    static getBookbyUrl(url){
        //console.log("fecthing....");
        return ( axois.get(consts.DB_URL+url).then(res => {
            //console.log("response from server ....",res);
            return res.data;
        }).catch(err => {return err;})
        )
    }
    
}