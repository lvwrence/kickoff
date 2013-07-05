var bookshelf = require('./bookshelf');
var User = require('./user');

var Errors = require('./errors');
var UsernameAlreadyInUse = Errors.UsernameAlreadyInUse;
var EmailAlreadyInUse = Errors.EmailAlreadyInUse;


module.exports.getUser = function* (uid) {
  return new User({id: uid}).fetch();
};

module.exports.createUser = function *(user) {
  return new User({username: user.username})
    .fetch()
    .then(function(model) {
      if (model) {
        throw new UsernameAlreadyInUse();
      }

      return new User({email: user.email}).fetch();
    })
    .then(function(model) {
      if (model) {
        throw new EmailAlreadyInUse();
      }

      return new User(user).save();
    });
};

module.exports.updateUser = function *(userDict) {
};

module.exports.deleteUser = function *(uid) {
  return new User({id: uid}).destroy();
};
