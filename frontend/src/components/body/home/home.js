import React from "react";
import BookTrending from "../booksTrending/booksTrending";
import LoadContentByGenre from "../LoadContentByGenre/loadContentByGenre";
import { Grid } from "@material-ui/core";
// import FictionSlideShow from "../booksTrending/fictionSlideShow"
// import NonFictionSlideShow from "../booksTrending/nonFictionSlideShow"

import Box from "@material-ui/core/Box";

const Home = () => {
  return (
    <>
     <BookTrending />
      <Grid container spacing={2}>
       
        <Grid container direction="column" alignItems="center">
          <Grid container direction="row"></Grid>

          <LoadContentByGenre />
        </Grid>

        <h5>
          Now add store and handle login...at navbar
          <br />
          NEED TO ADD HOME COMPONENT
          <br />
          CHECK YOUR ROUTEs for Other Task{" "}
        </h5>
      </Grid>
    </>
  );
};

export default Home;
