import { loadAllTrendingBooks } from "../../redux/trendingBooksRedux/midleware";
import { connect } from "react-redux";
import ContentGalaryLoader from "../contentSlideShow/contentGalaryLoader";
const BooksTreding = (props) => {
  return (
    <>
      <ContentGalaryLoader
        contents={props.books}
        contentType={"Trending Books...."}
      />
    </>
  );
};

const mapPropsToState = (store) => {
  return { books: store.bookReducer.books };
};

export default connect(mapPropsToState)(BooksTreding);
