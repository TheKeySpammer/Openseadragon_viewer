var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Opensea Dragon App' });
});

router.get('/view', function (req, res, next) {
  res.render('viewer');
});

module.exports = router;
