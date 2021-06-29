import axios from "axios";
import {
  FETCH_REVIEWS,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAILED
} from './action-types';
import { REVIEW_ROUTES } from "../reviews-routes";

export const fetchReviewsAction = () => (dispatch: any) => {
    dispatch({ type: FETCH_REVIEWS });

    const route = REVIEW_ROUTES.getReviews;

    axios.get(route)
      .then(({ data }) => dispatch({ type: FETCH_REVIEWS_SUCCESS, payload: data }))
      .catch(() => dispatch({ type: FETCH_REVIEWS_FAILED }));
}
