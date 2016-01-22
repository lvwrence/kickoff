var koa = require('koa');
var logger = require('koa-logger');
var errorLogger = require('koa-error-logger');
var bodyParser = require('koa-bodyparser');
var serve = require('koa-static');
var app = koa();

var router = require('./controllers/api');

app.use(logger());
app.use(errorLogger());
app.use(bodyParser());
app.use(serve('dist'));
app.use(router.routes());

module.exports = app;
