//Queries will connect our DB with CRUD functions
var promise = require('bluebird'); //require bluebird promise library and config options
var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')(options); //require for pg promise and passing options object
var connectionString = 'postgres://localhost:5432/library_db';
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
		console.log('work on refrsh', data);
		res.render('index', {title: 'All resources', data:data })
	})
}

module.exports = {
	createResource: createResource,
	getAllResources: getAllResources,
};