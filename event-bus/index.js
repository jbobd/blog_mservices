const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());


//Replicamos los eventos recibidos en el event bus a todos los microservicios
app.post("/events", (req, res) => {
  const event = req.body;
  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: "OK" });
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
