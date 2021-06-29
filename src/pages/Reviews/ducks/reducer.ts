import { initialState } from 'pages/Reviews/ducks/initial-state';
import { FETCH_REVIEWS, FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAILED } from 'pages/Reviews/ducks/action-types';
import { Action } from 'store/types';
import { RequestStatus } from 'models/enums/request-status';

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_REVIEWS:
            return {
                ...state,
                loadReviewsRequestStatus: RequestStatus.Loading
            };
        case FETCH_REVIEWS_SUCCESS:
            return {
                ...state,
                reviews: action.payload,
                loadReviewsRequestStatus: RequestStatus.Success
            };
        case FETCH_REVIEWS_FAILED:
            return {
                ...state,
                loadReviewsRequestStatus: RequestStatus.Failure
            };
    }

    return state;
}

export default reducer;
