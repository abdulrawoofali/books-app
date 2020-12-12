import { Typography, Box } from "@material-ui/core";
import SmallCardsGridLoader from "../small-cards/smallCardsGridLoader";
import Loading from "../../Loading/loading";
import { connect } from "react-redux";
const LoadContentByGenre = (props) => {
  const { gernes } = props;
  // const clenGernes = gernes.battdat;
  // console.log(clenGernes, "am data by genre");

//   if(gernes.length>0){
//     gernes.map(genre =>{
//         console.log(genre.genre);
//     })
  
//   console.log(gernesUi);
  return (
    <>
      <h5>content grid view hear...</h5>
  <Box> {gernes.length <= 0 ?   <Loading /> :gernes.map((gerne,index) => (<SmallCardsGridLoader key={gerne.genre._id} contentItems={gerne.genre.books} contentTitle={gerne.genre.name} generIndex={index}/>))}
  
  </Box>
    </>
  );
};

const mapPropsToState = (store) => {
  //console.log(store);
  return { gernes: store.genreBookReducer.generBookData };
};

export default connect(mapPropsToState)(LoadContentByGenre);
