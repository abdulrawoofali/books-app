import {SING_IN,SING_UP} from "./actionConstants"


const INIT_STATE = {
    isLogined:false,
    userDetails:{}
}

export default (state=INIT_STATE,action)=>{
    switch(action.type){
        case SING_IN : {

            return{
                ...state,
            }
        }
        default : return state;    
    }
}