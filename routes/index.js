var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/', function(req, res, next) {
//   let data = [req.body]
//   res.render('index', { title: 'items', data:data });
// })

module.exports = router;
