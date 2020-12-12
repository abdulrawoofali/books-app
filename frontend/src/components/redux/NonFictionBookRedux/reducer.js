import {LOAD_NON_FICTION_BOOKS} from "./actionConstants"


const INIT_STATE = {
    nonFictionBooks:[]
}

export default (state = INIT_STATE,action)=>{
    //console.log(action.payload, "am reducer from non")

    switch(action.type){
        case LOAD_NON_FICTION_BOOKS:{
            return {...state,nonFictionBooks:action.payload};
        }
        default : return {...state};
    }

}