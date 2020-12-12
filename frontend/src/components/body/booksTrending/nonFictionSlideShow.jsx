import { loadAllFictionalTrendingBooks } from "../../redux/trendingBooksRedux/midleware";
import { connect } from "react-redux";
import ContentGalaryLoader from "../contentSlideShow/contentGalaryLoader";
const NonFictionSlideShow = (props) => {
  //console.log(props,"am non fiction")
  return (
    <> non fiction
      <ContentGalaryLoader
        contents={props.books}
        contentType={"Fictional Trending Books...."}
      />
    </>
  );
};

const mapPropsToState = (store) => {
  //console.log(store.nonFictionReducer);
  return { books: store.nonFictionReducer.nonFictionBooks };
};

export default connect(mapPropsToState)(NonFictionSlideShow);
