import Review from "./review";
import { RequestStatus } from 'models/enums/request-status';

export interface ReviewsStateModel {

    reviews: Review[];

    loadReviewsRequestStatus: RequestStatus;

}