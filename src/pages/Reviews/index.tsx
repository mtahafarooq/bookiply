import React, { FC, useEffect } from 'react';
import Review from "./types/review";

interface ReviewsProps {
  reviews: Review[];
  fetchReviews: () => void;
}

const Reviews: FC<ReviewsProps> = ({ reviews, fetchReviews }) => {
  useEffect(() => {
      fetchReviews();
    }, [ fetchReviews ]
  )

  return (
    <div>{ JSON.stringify(reviews) }</div>
  );
}

export default Reviews;
