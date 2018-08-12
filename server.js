const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

const app = express();

const mongoURI = require("./config/keys_dev").mongoURI;

const conn = mongoose.createConnection(mongoURI, () => {
  console.log("Connected to MongoDB");
});

//Init gfs
let gfs;

conn.once("open", () => {
  //Init Stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

//@route  GET /files
//@desc   display all files in json
app.get("/files", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({ error: "No files exist" });
    }

    return res.json(files);
  });
});

//@route  GET /files/:filename
//@desc   display file by filename
app.get("/files/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ error: "No file by that name" });
    }
    return res.json(file);
  });
});

//@route  GET /image/:filename
//@desc   display image by filename
app.get("/image/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ error: "No file by that name" });
    }

    //check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      //read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({ error: "Not an image" });
    }
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
