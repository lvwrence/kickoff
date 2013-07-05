var server = require('./server');
var port = require('./config').port;

server.listen(port, function() {
  console.log('Server running on port %d', port);
});
