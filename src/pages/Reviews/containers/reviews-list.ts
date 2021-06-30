import { connect } from 'react-redux';
import ReviewsList from "components/reviews/reviews-list";
import { fetchReviewsAction } from "../ducks/actions";
import { State } from "store/types";
import { bindActionCreators } from "redux";

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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
