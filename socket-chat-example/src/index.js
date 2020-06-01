const express = require("express");
const app = express();

app.use(express.json());

// routes import
require('./routes')(app);

module.exports = app;
