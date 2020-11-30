import { loadAllFictionalTrendingBooks } from "../../redux/trendingBooksRedux/midleware";
import { connect } from "react-redux";
import ContentGalaryLoader from "../contentSlideShow/contentGalaryLoader";
const FictionSlideShow = (props) => {
 // console.log(props);
  return (
    <>
      <ContentGalaryLoader
        contents={props.books}
        contentType={"Fictional Trending Books...."}
      />
    </>
  );
};

const mapPropsToState = (store) => {
  //console.log(store);
  return { books: store.fictionReducer.fictionBooks };
};

export default connect(mapPropsToState)(FictionSlideShow);
