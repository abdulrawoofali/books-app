import {SING_IN,SING_OUT,SING_UP} from "./actionConstants"
export const singInAction = (singinData)=>{
    return{
        type:SING_IN,
        payload:singinData
    }

}
// export const singUpAction = (singinData)=>{
//     return{
//         type:SING_OUT,
//         payload:singUpData
//     }

// }

export const singOutAction= ()=>{
    return{
        type:SING_UP,
        payload:singUpData
    }

}
