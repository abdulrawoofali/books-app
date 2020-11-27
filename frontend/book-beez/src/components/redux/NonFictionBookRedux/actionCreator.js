import {LOAD_NON_FICTION_BOOKS}from "./actionConstants";

export default (data)=>{
    //console.log("am action of no fiction data.....",data);

    return({   
        type:LOAD_NON_FICTION_BOOKS,
        payload:data,
    });
}
