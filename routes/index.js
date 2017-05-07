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
	console.log('does this get new item -->', req.params.challenge);
	//res.status(200)
	let challenge = req.params.challenge;
	//let stat = res.status(200);
	console.log(req.params.new.item.challenge)
	//console.log('showing status? -->', stat);
	//console.log('display challenge?-->', challenge);
	let ct = res.get('Content-type');
	console.log('content-type', ct);

  //console.log('REQ PARAMS', req.params);

	res.send('OK');


	req.json();
	
})

// router.get('/', db.getAllResources);
router.get('/:id', db.getItem);
router.post('/', db.createResource);
router.delete('/:id', db.deleteResource);
router.patch('/:id', db.updateCount);


module.exports = router;

/*DATABASE_URL=postgres://localhost:5432/library_db*/