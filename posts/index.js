const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});
 
const port = process.env.PORT || 4000;

//event handler
//we receive new post and new comment event but in this case it doesn't care about them, 
//only the query service does

app.post("/events", (req, res) => {
  console.log("Received event", req.body.type);
  res.send({});
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`listening on ${port}`);
});
