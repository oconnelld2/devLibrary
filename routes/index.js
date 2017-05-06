var express = require('express');
var router = express.Router();
let data = [];
var db = require('../queries'); //require queries file

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/', db.getAllResources);
router.post('/', db.createResource);

module.exports = router;
