var express = require('express');
var router = express.Router();

const _ = require('lodash');

function indexRouter({ io, db }) {

  io.on('connect', socket => {
    console.log('A new client connected');
  });

  /* GET home page of matches. */
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

  return router;
}

module.exports = indexRouter;
