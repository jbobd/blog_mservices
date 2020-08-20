const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content: content });
  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
