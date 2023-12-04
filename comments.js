// Create web server
var express = require('express');
var router = express.Router();

// Create a new comment
router.post('/comments', function(req, res) {
  var db = req.db;
  var collection = db.get('comments');
  collection.insert(req.body, function(err, result) {
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});

// Get all comments
router.get('/comments', function(req, res) {
  var db = req.db;
  var collection = db.get('comments');
  collection.find({}, {}, function(e, docs) {
    res.json(docs);
  });
});

module.exports = router;