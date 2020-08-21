import axios from "axios";

//posts
export const setPost = async (title) => {
  await axios.post("http://localhost:4000/posts", {
    title: title,
  });
};

export const getAllPosts = async () => {
  const posts = await axios.get("http://localhost:4000/posts");
  return posts.data;
};

//comments
export const setComment = async (comment, postId) => {
  await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
    content: comment,
  });
};

export const getCommentsByPostId = async (postId) => {
  const posts = await axios.get(
    `http://localhost:4001/posts/${postId}/comments`
  );
  return posts.data;
};
