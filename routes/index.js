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
router.delete('/:id', db.deleteResource);

module.exports = router;

/*DATABASE_URL=postgres://localhost:5432/library_db*/