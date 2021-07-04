import { connect } from 'react-redux';
import { fetchReviewsAction } from "../ducks/actions";
import { State } from "store/types";
import { bindActionCreators } from "redux";
import ReviewsContainer from "../../../components/reviews/reviews-container";

const mapStateToProps = (state: State) => {
  return {
    reviews: state.reviewsState.reviews
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchReviews: fetchReviewsAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
