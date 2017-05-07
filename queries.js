//Queries will connect our DB with CRUD functions
var promise = require('bluebird'); //require bluebird promise library and config options
var options = {
  promiseLib: promise
};

let herokuDB = 'postgres://tlyyavrceuuwmc:9c37cfc74584a8d47b0607d08f33943cc6a0d1dcc4841fc8bb76cd340b198008@ec2-23-23-111-171.compute-1.amazonaws.com:5432/df4okhm5kne58j';
var pgp = require('pg-promise')(options); //require for pg promise and passing options object
// var connectionString = 'postgres://localhost:5432/library_db';
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

function createResource(req,res,next){
	console.log('new item', req.body)
	db.none('insert into lib_resources(title, subject, link)' +
	'values(${title}, ${subject}, ${link})', req.body)
	.then(res.redirect('/'))
	.catch(function(err) {
		return next(err);
	});
}

function getAllResources(req,res,next){
	//selecting db.any to return data to page
	db.any('select * from lib_resources')
	.then(function(data) {
		console.log('getting all resources ------->', data);
		res.render('index', {title: 'All resources', data:data })
	})
}

function deleteResource(req,res,next) {
	let resourceId = parseInt(req.params.id)
	console.log(resourceId);
	db.result('delete from lib_resources where id = $1', resourceId)
	.catch(function(err) {
		return next(err);
	});
}

function upVote (req,res,next) {
	let getId = req.params.id;
	console.log('get id', typeof getId);
	db.none('update lib_resources set likes = $1 where id = $2',
		[req.body.likes, getId])
	.then(function() {
		res.status(200)
	})
}

module.exports = {
	createResource: createResource,
	getAllResources: getAllResources,
	deleteResource: deleteResource,
	upVote: upVote,
};