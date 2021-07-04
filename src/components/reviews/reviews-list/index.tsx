import React, { FC, memo } from 'react';
import Review from "pages/Reviews/types/review";
import ReviewCard from 'components/reviews/review-card';

interface ReviewsListProps {
  reviews: Review[];
}

const ReviewsList: FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <>
      { reviews.map((review, index) => <ReviewCard key={ index } review={ review } />) }
    </>
  );
}

export default memo(ReviewsList);
