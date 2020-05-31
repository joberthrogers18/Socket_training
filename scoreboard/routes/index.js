var express = require('express');
var router = express.Router();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const _ = require('lodash');

// Set up the database
const adapter = new FileSync('data/db.json');
const db = low(adapter);
db.defaults(require('../data/default-data.json')).write();


/* GET home page. */
router.get('/', function(req, res, next) {
  const matches = db.get('matches').value();
  res.render('index', { matches });
});

router.get('/match/:id', function(req, res, next) {
  const { id } = req.params;
  const matches = db.get('matches').value();
  const match = db.get('matches['+id+']').value()
  match.bids = _.orderBy(match.bids, ['half', 'time'], ['desc', 'desc']);
  res.render('match', { matches, match, id });
});

module.exports = router;
