import {LOAD_FICTION_BOOKS} from "./actionConstants"


const INIT_STATE = {
    fictionBooks:[]
}

export default (state = INIT_STATE,action)=>{

    switch(action.type){
        case LOAD_FICTION_BOOKS:{
            return { 
                ...state,
                fictionBooks:action.payload
                };
        }
        default : return state;
    }

}