var express = require('express');
var router = express.Router();

/* GET my health page. */
router.get('/', function(req, res, next) {
  res.render('h', { title: 'My Health' });
});

module.exports = router;
