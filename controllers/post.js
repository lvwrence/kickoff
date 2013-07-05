var Router = require('koa-router');

var router = new Router({
  prefix: '/posts'
});

router.get('/:pid', function *(next) {
  this.body = {'hello': 'world'};
});

router.post('/', function *(next) {
  this.body = {'hello': 'world'};
});

router.put('/:pid', function *(next) {
  this.body = {'hello': 'world'};
});

router.del('/:pid', function *(next) {
  this.body = {'hello': 'world'};
});

module.exports = router;
