var express = require('express');
var router = express.Router();
let data = [];
var db = require('../queries'); //require queries file

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function (req, res, next) {
	let params = req.params;
	let body = req.body;
	console.log('SHow params----->', params);
	console.log('SHow BODY----->', body);
	// console.log(application/x-www-form-urlencoded);
	res.send('OK');
	});


/*router.get('/', function (req, res, next) {
	req.accepts('application/json');
	//console.log('does this get new item -->', req.params.challenge);

const payload = req.body;

console.log('CHALLENGE ------>', payload.challenge);
if (payload.type === 'url_verification') {
    res.send(payload.challenge);
  } else {
    res.status(400).end();
  }

})*/


//const express = require('express');
//const bodyParser = require('body-parser');

//const app = express();
//app.use(bodyParser.json());

//app.post('/slack/events', (req, res, next) => {
  //const payload = req.body;

  /*if (payload.type === 'url_verification') {
    res.send(payload.challenge);
  } else {
    res.status(400).end();
  }
});*/

	//let ct = res.get('Content-type');
	//console.log('content-type', ct);

  //console.log('REQ PARAMS', req.params);

	//res.send('OK');


	//req.json();
	
//})

// router.get('/', db.getAllResources);
router.get('/:id', db.getItem);
router.post('/', db.createResource);
router.delete('/:id', db.deleteResource);
router.patch('/:id', db.updateCount);


module.exports = router;

/*DATABASE_URL=postgres://localhost:5432/library_db*/