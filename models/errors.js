function UsernameAlreadyInUse(message) {
  this.name = 'UsernameAlreadyInUse';
  this.message = message || 'Username is already in use.';
  this.stack = (new Error()).stack;
}
UsernameAlreadyInUse.prototype = Object.create(Error.prototype);
UsernameAlreadyInUse.prototype.constructor = UsernameAlreadyInUse;;

function EmailAlreadyInUse(message) {
  this.name = 'EmailAlreadyInUse';
  this.message = message || 'Email is already in use.';
  this.stack = (new Error()).stack;
}
EmailAlreadyInUse.prototype = Object.create(Error.prototype);
EmailAlreadyInUse.prototype.constructor = EmailAlreadyInUse;;


module.exports = {
  UsernameAlreadyInUse: UsernameAlreadyInUse,
  EmailAlreadyInUse: EmailAlreadyInUse
}
