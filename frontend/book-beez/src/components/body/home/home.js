import React from 'react';
import BookTrending from "../booksTrending/booksTrending"
import FictionSlideShow from "../booksTrending/fictionSlideShow"
import NonFictionSlideShow from "../booksTrending/nonFictionSlideShow"

import Box from "@material-ui/core/Box"

const Home = () => {
    return (
        <> 
        <Box>
        <BookTrending/>
        <FictionSlideShow/>
        <NonFictionSlideShow/>

        <h5>Now add store and handle login...at navbar<br/>
        NEED TO ADD HOME COMPONENT<br/>
        CHECK YOUR ROUTEs for Other Task  </h5>  
        </Box>  
         </> );
}
 
export default Home;