import { FC, memo } from "react";
import { CommentDiv, CommentWrapper } from "./styles";
import Icon from "../icon";

interface CommentProps {
  comment: string;
  icon?: string;
}

const Comment: FC<CommentProps> = ({ comment, icon }) => {
  return (
    <CommentWrapper>
      { icon && <Icon path={icon} />}
      <CommentDiv>{comment}</CommentDiv>
    </CommentWrapper>
  );
}

export default memo(Comment);
