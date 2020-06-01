const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes import
require("./routes")(app);

module.exports = app;
