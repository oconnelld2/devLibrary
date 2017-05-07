var express = require('express');
var router = express.Router();
let data = [];
var db = require('../queries'); //require queries file

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req,res,next) {
	req.accepts('application/json');
	console.log(req.body);
	res.status(200)
	res.send('OK');
	console.log(res.headersSent);
})

// router.get('/', db.getAllResources);
router.get('/:id', db.getItem);
router.post('/', db.createResource);
router.delete('/:id', db.deleteResource);
router.patch('/:id', db.updateCount);


module.exports = router;

/*DATABASE_URL=postgres://localhost:5432/library_db*/