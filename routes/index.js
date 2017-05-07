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
	console.log('does this get new item -->', req.body);
	res.status(200)
	let challenge = req.body.challenge;
	let stat = res.status();
	console.log(challenge);
	let ct = res.get('Content-type');
	res.send({ 
		status: stat, 
		message: 'OK',
		type: ct
	});

	req.json();
	
})

// router.get('/', db.getAllResources);
router.get('/:id', db.getItem);
router.post('/', db.createResource);
router.delete('/:id', db.deleteResource);
router.patch('/:id', db.updateCount);


module.exports = router;

/*DATABASE_URL=postgres://localhost:5432/library_db*/