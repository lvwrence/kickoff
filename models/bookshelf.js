var env = require('../config').environment;
var dbconfig = require('../knexfile')[env];
var knex = require('knex')(dbconfig);

module.exports = require('bookshelf')(knex);
