var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('HELLO VERCEL');
});

module.exports = router;

