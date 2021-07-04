import React, { FC, memo, useState } from 'react';
import Review from "pages/Reviews/types/review";
import { MainContainer } from "./styles";
import { ReviewFilters } from "../../../models/interfaces/review-filters";
import Filters from 'components/reviews/filters/filters';
import EmptyView from "../../../elements/empty-view";
import { Paginator } from "primereact/paginator";
import ReviewsList from "../reviews-list";

interface ReviewsContainerProps {
  reviews: Review[];
  fetchReviews: (filters?: ReviewFilters) => void;
}

const ReviewsContainer: FC<ReviewsContainerProps> = ({ reviews, fetchReviews }) => {
  const ROWS_PER_PAGE = 10;
  // api doesn't return total number of records
  // as it should, hence hardcoding it to 30
  const TOTAL_NUMBER_OF_RECORDS = 30;

  const [ page, setPage ] = useState(0)
  const [ first, setFirst ] = useState(0);

  const onPageChange = (event) => {
    // api treats page = 0 & page = 1 the same
    // hence we iterate as following = 0, 2, 3
    setPage(event.page + 1);
    setFirst(event.first);
  }

  return (
    <MainContainer>
      <div className={'headerContainer'}>
        <div className={'reviewsCount'}>{reviews.length} Reviews</div>
        <Filters fetchReviews={ fetchReviews } page={ page } />
      </div>

      { reviews.length === 0 && <EmptyView message={'No reviews match the given filter criteria.'} /> }

      { reviews.length !== 0 && <ReviewsList reviews={ reviews }/> }

      <Paginator first={ first } rows={ ROWS_PER_PAGE } totalRecords={ TOTAL_NUMBER_OF_RECORDS } onPageChange={ onPageChange } />
    </MainContainer>
  );
}

export default memo(ReviewsContainer);
