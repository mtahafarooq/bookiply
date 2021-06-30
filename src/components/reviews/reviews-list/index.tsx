import React, { FC, useEffect, memo } from 'react';
import Review from "pages/Reviews/types/review";
import { MainContainer } from "./styles";
import ReviewCard from 'components/reviews/review-card';

interface ReviewsListProps {
    reviews: Review[];
    fetchReviews: () => void;
}

const ReviewsList: FC<ReviewsListProps> = ({ reviews, fetchReviews }) => {
    useEffect(() => {
        fetchReviews();
    }, [fetchReviews])

    return (
        <MainContainer>
            <div className={'reviewsCount'}>{reviews.length} Reviews</div>
            {reviews.map((review, index) => <ReviewCard key={index} review={review} />)}
        </MainContainer>
    );
}

export default memo(ReviewsList);
