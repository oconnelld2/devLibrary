//Queries will connect our DB with CRUD functions
var promise = require('bluebird'); //require bluebird promise library and config options
var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')(options); //require for pg promise and passing options object
var connectionString = 'postgres://localhost:6432/library_db';
var db = pgp(connectionString);