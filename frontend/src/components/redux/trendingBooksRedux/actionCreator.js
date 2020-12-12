import * as consts from "./actionConstants";

export const loadBooksSuccess = (data)=>{
    return({   
            type:consts.GET_TRENDING_BOOKS,
            payload:data,
        }
    );
}



