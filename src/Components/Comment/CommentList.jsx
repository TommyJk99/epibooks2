import React from "react";
import SingleComment from "./SingleComment";

const CommentList = ({ comments, setComments, asin }) => {
  return (
    <div>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} setComments={setComments} asin={asin} />
      ))}
    </div>
  );
};

export default CommentList;
