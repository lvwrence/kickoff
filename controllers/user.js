var Router = require('koa-router');
var query = require('../models/query');

var router = new Router({
  prefix: '/users'
});

router.get('/:uid', function *(next) {
  this.body = yield query.getUser(this.params.uid);
});

router.post('/', function *(next) {
  try {
    this.body = yield query.createUser(this.request.body);
    this.status = 201;
  } catch (err) {
    this.body = err.message;
    this.status = 400;
  }
});

router.put('/:uid', function *(next) {
  this.body = {'hello': 'world'};
});

router.del('/:uid', function *(next) {
  yield query.deleteUser(this.params.uid);
});


module.exports = router;
