import React from "react";
import Image from "../Image/Image";
import "./comments.css";
import Comment from "./comment";
import CommentForm from "./commentForm";

const Comments = () => {
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">{2 + " Comments"}</span>
        {/* COMMENT */}
        {[1, 2].map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
      <CommentForm />
    </div>
  );
};

export default Comments;
