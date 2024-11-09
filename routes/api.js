const express = require("express");
const productRouter = require("./product.js");
const app = express();

app.use('/products/', productRouter);

module.exports = app;