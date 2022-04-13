const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const videos = require("./videos.js");

app.get("/", (req, res) => {
  return res.status(200).send("hello");
});

app.get("/videos", (req, res) => {
  if (req.query.type) {
    const result = videos.filter((video) => {
      return video.type === req.query.type;
    });
    return res.status(200).json(result);
  }
  return res.status(200).json(videos);
});

app.get("/videos/:id", (req, res) => {
  const result = videos.find((video) => {
    return video.id === req.params.id;
  });
  return res.status(200).json(result);
});

app.listen(PORT || process.env.PORT, () => console.log("server is running"));
