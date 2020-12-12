import {GET_BOOKS_BY_GENRE} from "./actionConstants";

const INIT_STATE = {
    generBookData :[]
}

export default (state=INIT_STATE,action)=>{
    console.log("action type",action.type);
    
    switch(action.type){
      
        case GET_BOOKS_BY_GENRE : {
            return({
                ...state,
                generBookData:action.payload
            })
        }
        default: return {...state};

    }
}