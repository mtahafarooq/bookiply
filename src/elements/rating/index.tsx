import { FC, memo } from "react";
import { Pill } from "./styles";

interface RatingProps {
  score: number;
  total: number;
}

const Rating: FC<RatingProps> = ({ score, total }) => {
  return (
    <Pill>
      <strong>{score}</strong> / { total}
    </Pill>
  );
}

export default memo(Rating);
