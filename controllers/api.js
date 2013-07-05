var Router = require('koa-router');
var users = require('./user');
var posts = require('./post');

var router = new Router({
  prefix: '/api'
});

// Add middleware to make all request types json.
router.use(function *(next) {
  this.type = 'json';
  yield next;
});

router.use(users.routes(),
           posts.routes());

module.exports = router;
