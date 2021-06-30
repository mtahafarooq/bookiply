import { FC, memo } from "react";
import { ReviewDateContainer } from "./styles";

interface ReviewDateProps {
  timeStamp: string;
}

export const ReviewDate: FC<ReviewDateProps> = ({ timeStamp }) => {
  const reviewDate = new Date(timeStamp);
  const month = reviewDate.toLocaleString('default', { month: 'long' });

  return (
    <ReviewDateContainer>Reviewed { reviewDate.getDay()} { month} { reviewDate.getFullYear()}</ReviewDateContainer>
  );
}

export default memo(ReviewDate);
