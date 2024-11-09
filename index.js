require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const apiRouter = require('./routes/api.js')

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Shrew");
});

app.use("/api/", apiRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected! to MongoDevDb");
    app.listen(3000, () => {
      console.log("Server is running on port 3000 update");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  }
);
