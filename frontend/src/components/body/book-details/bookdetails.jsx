import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Typography, Box, Grid, TextField, Button } from "@material-ui/core";
import SmallCardsGridLoader from "../small-cards/smallCardsGridLoader";
import ConnectGalaryCard from "../contentSlideShow/contentGalaryCard";
import AuthorSmallCard from "../author/authorSmallCard";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Loading from "../../Loading/loading";

const useStyles = makeStyles({
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    flex: "1",
  },
});

const BookDetails = (props) => {
  const { state } = props.location;
  const { generIndex, bookIndex, content } = props.location.state;
  const [authorAndBooks, setAuthorAndBooks] = useState(null);
  const { gernes } = props;
  console.log(gernes[generIndex], generIndex, bookIndex);
  // const bookDataByGener = gernes[generIndex].genre.books
  console.log(authorAndBooks);
  //console.log(authorAndBooks? authorAndBooks[0].books : null);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const { data } = await axios
        .get("http://localhost:5000/api/v2/authorAndBooks/" + content.author)
        .then((data) => data)
        .catch((err) => {
          console.log(err);
        });
      setAuthorAndBooks(data);
      console.log("Got data from db....");
    })();
  }, [gernes]);

  return (
    <>
      <ConnectGalaryCard content={content} showSummary={true}>
        {authorAndBooks ? (
          <AuthorSmallCard author={authorAndBooks[0]}></AuthorSmallCard>
        ) : null}
        <Box>
          <Button color="primary">ReadNow</Button>
          <Button color="secondary">Add To Shelves</Button>
        </Box>
      </ConnectGalaryCard>
      <Grid container spacing={2}>
        <Grid container direction="column" alignItems="center">
          <Grid
            container
            direction="row"
            alignContent="center"
            item
            lg={10}
          ></Grid>
          {/* authorAndBooks? authorAndBooks[0].books : null */}

          {authorAndBooks ? (
            <SmallCardsGridLoader
              contentItems={authorAndBooks[0].books}
              contentTitle="Explore Books By author......"
            />
          ) : (
            <Loading />
          )}
          {gernes[generIndex] && "genre" in gernes[generIndex] ? (
            <SmallCardsGridLoader
              contentItems={gernes[generIndex].genre.books}
              contentTitle="Explore similar Books...."
              generIndex={generIndex}
            />
          ) : (
            <Loading />
          )}
        </Grid>
      </Grid>
    </>
  );
};
const mapPropsToState = (store) => {
  //console.log(store);
  return { gernes: store.genreBookReducer.generBookData };
};

export default connect(mapPropsToState)(BookDetails);
