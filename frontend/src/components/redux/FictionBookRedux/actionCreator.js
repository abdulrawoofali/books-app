import * as consts from "./actionConstants";

export default (data)=>{
    return({   
        type:consts.LOAD_FICTION_BOOKS,
        payload:data,
    });
}
