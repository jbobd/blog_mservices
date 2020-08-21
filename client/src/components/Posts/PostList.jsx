import React, { useState, useEffect } from "react";

import { getAllPosts } from "../../utils";
import CommentCreate from "../comments/CommentCreate";
import CommentList from "../comments/CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    getAllPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {Object.values(posts).map((post, index) => (
        <div
          key={index}
          className="card"
          style={{ width: "30%", marginBottom: "20px" }}
        >
          <div className="card-body">
            <h3> {post.title}</h3>
            <CommentList postId={post.id} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
