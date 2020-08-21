import React, { useState, useEffect } from "react";

import { getCommentsByPostId } from "../../utils";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByPostId(postId).then((comments) => setComments(comments));
  }, []);

  return (
    <ul>
      {comments.map((comment, index) => (
        <li> {comment.content}</li>
      ))}
    </ul>
  );
};

export default CommentList;
