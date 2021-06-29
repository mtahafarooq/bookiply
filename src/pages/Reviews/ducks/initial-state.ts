import { RequestStatus } from 'models/enums/request-status';
import { ReviewsStateModel } from '../types/reviews-state-model';

export const initialState: ReviewsStateModel = {

    reviews: [],

    loadReviewsRequestStatus: RequestStatus.Idle

}
