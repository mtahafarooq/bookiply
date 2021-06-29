import { connect } from 'react-redux';
import Reviews from "../index";
import { fetchReviewsAction } from "../ducks/actions";
import { State } from "../../../store/types";
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

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
