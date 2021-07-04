import axios from "axios";
import {
  FETCH_REVIEWS,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAILED
} from './action-types';
import { REVIEW_ROUTES } from "../reviews-routes";
import { ReviewFilters } from "../../../models/interfaces/review-filters";

export const fetchReviewsAction = (filters: ReviewFilters = {}) => (dispatch: any) => {
    dispatch({ type: FETCH_REVIEWS });

    let route = REVIEW_ROUTES.getReviews;

    if (filtersArePresent(filters)) {
      route = appendFiltersToRoute(route, filters);
    }

    axios.get(route)
      .then(({ data }) => dispatch({ type: FETCH_REVIEWS_SUCCESS, payload: data }))
      .catch(() => dispatch({ type: FETCH_REVIEWS_FAILED }));
}

const filtersArePresent = (filters: ReviewFilters) => {
  return Object.keys(filters).length !== 0;
}

const appendFiltersToRoute = (route: string, filters: ReviewFilters): string => {
  route = `${ route }?`;

  Object.entries(filters).forEach((pair: any) => {
    const [ filterKey, filterValue ] = pair;

    filterValue.forEach(value => {
      route = `${ route }${ filterKey }=${ value }&`;
    });
  });

  // remove the last &
  route = route.slice(0, -1);

  return route;
}
