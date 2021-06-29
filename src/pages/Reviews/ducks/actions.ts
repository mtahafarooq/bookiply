import { FETCH_REVIEWS } from 'pages/Reviews/ducks/action-types';

export const fetchReviews = () => (dispatch: any, getState: any) => {
    return {
        type: FETCH_REVIEWS,
        payload: {}
    }
}