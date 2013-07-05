exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments();
    table.integer('user_id').references('users.id');
    //table.string('username').unique();
    //table.string('email').unique();
    //table.string('password');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
