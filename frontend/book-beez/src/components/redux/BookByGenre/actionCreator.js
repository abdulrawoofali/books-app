import {GET_BOOKS_BY_GENRE} from "./actionConstants";

export const loadBooksByGenreSuccess = (data)=>{
    return({   
            type:GET_BOOKS_BY_GENRE,
            payload:data,
        }
    );
}

