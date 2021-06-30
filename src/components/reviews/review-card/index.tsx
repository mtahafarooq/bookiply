import React, { FC, memo } from 'react';
import { ContentCard } from "./styles";
import Holidu from 'assets/icons/holidu.svg';
import BookingCom from 'assets/icons/bookingcom.svg';
import Airbnb from 'assets/icons/airbnb.svg';
import Like from 'assets/icons/thumb-up.svg';
import Dislike from 'assets/icons/thumb-down.svg';
import Review from 'pages/Reviews/types/review';
import Comment from "elements/comment";
import Rating from "elements/rating";
import Icon from "elements/icon";
import ReviewDate from "elements/review-date";

interface ReviewCardProps {
  review: Review
}

enum Channel {
  AIRBNB,
  BOOKINGCOM,
  HOLIDU
}

const TOTAL_SCORE = 5;

const getLogoPath = (channel: Channel): string => {
  switch (channel) {
    case Channel.AIRBNB:
      return Airbnb;

    case Channel.HOLIDU:
      return Holidu;

    case Channel.BOOKINGCOM:
      return BookingCom;

    default:
      throw Error(`Channel not found, channel = ${channel}`);
  }
}

const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  const { headline, comment, author, positiveFeedback, negativeFeedback, score, channel, publishedAt } = review

  return (
    <ContentCard>
      <div className={'header'}>
        <Rating score={score} total={TOTAL_SCORE} />
        <Icon path={getLogoPath(Channel[channel])} />
      </div>

      <div className={'headline'}>{headline}</div>

      <Comment comment={comment} />
      { positiveFeedback && <Comment comment={positiveFeedback} icon={Like} />}
      { negativeFeedback && <Comment comment={negativeFeedback} icon={Dislike} />}

      <div className={'author'}>{author}</div>
      <ReviewDate timeStamp={publishedAt} />
    </ContentCard>
  );
};

export default memo(ReviewCard);
