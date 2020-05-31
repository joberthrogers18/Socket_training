var express = require('express');
var router = express.Router();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Set up the database
const adapter = new FileSync('data/db.json');
const db = low(adapter);
db.defaults(require('../data/default-data.json')).write();


/* GET home page. */
router.get('/', function(req, res, next) {
  const matches = db.get('matches').value();
  res.render('index', { matches });
});

module.exports = router;
