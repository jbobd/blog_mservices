import React, { useState } from "react";
import { setComment } from "../../utils";

const CommentCreate = ({ postId }) => {
  const [commentBody, setCommentBody] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setComment(commentBody, postId);
    setCommentBody("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            onChange={(e) => setCommentBody(e.target.value)}
            type="text"
            value={commentBody}
          />
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CommentCreate;
