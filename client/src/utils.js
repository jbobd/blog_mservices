import axios from "axios";

export const setPost = async (title) => {
  await axios.post("http://localhost:4000/posts", {
    title,
  });
};

export const getAllPosts = async () => {
  const posts = await axios.get("http://localhost:4000/posts");
  return posts.data;
};
