import {GET_TRENDING_BOOKS} from "./actionConstants"

const INIT_STATE = {
    books:[]
}

const bookReducer = (state=INIT_STATE,action)=>{
    //console.log("updating state of booksTrend");

    switch(action.type){
      
        case GET_TRENDING_BOOKS : {
            return({
                ...state,
                books:action.payload
            })
        }
        default: return state;

    }

}

export default bookReducer;