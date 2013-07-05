var test = require('tapes');
var app = require('../server');
var supertest = require('supertest-as-promised');
var request = supertest(app.callback());

var bookshelf = require('../models/bookshelf');
var User = require('../models/user');

var mocks = require('./mocks');

test('user api', function(t) {
  t.beforeEach(function(t) {
    User.fetchAll().then(function(collection) {
      collection.invokeThen('destroy').then(t.end);
    });
  });

  t.test('creating a user should work', function(t) {
    t.plan(3);
    request
      .post('/api/users')
      .send(mocks.testUser)
      .expect('Content-Type', /json/)
      .expect(201)
      .then(function(res) {
        t.equal(res.body.username, mocks.testUser.username, 'Usernames are equal');
        t.equal(res.body.email, mocks.testUser.email, 'Emails are equal');
        t.equal(res.body.password, mocks.testUser.password, 'Passwords are equal');
        t.end();
      })
      .catch(function(err) {
        t.end();
      });
  });

  t.test('creating then getting a user should return that user', function(t) {
    t.plan(3);
    request
      .post('/api/users')
      .send(mocks.testUser)
      .expect('Content-Type', /json/)
      .expect(201)
      .then(function(res) {
        return request
          .get('/api/users/' + res.body.id)
          .expect('Content-Type', /json/)
          .expect(200);
      })
      .then(function(res) {
        t.equal(res.body.username, mocks.testUser.username, 'Usernames are equal');
        t.equal(res.body.email, mocks.testUser.email, 'Emails are equal');
        t.equal(res.body.password, mocks.testUser.password, 'Passwords are equal');
        t.end();
      })
      .catch(function(err) {
        t.end();
      });
  });

  t.test('creating two users with the same username should error', function(t) {
    t.plan(1);
    request
      .post('/api/users')
      .send(mocks.testUser)
      .expect('Content-Type', /json/)
      .expect(201)
      .then(function(res) {
        return request
          .post('/api/users')
          .send({username: 'lawrence', email:'hi', password: 'asdf'})
          .expect('Content-Type', /json/)
          .expect(400)
      })
      .then(function(res) {
        t.equal(res.body, 'Username is already in use');
        t.end();
      })
      .catch(function(err) {
        console.log(err);
        t.end();
      });
  });

   t.test('destroy db connection', function(t) {
     bookshelf.knex.destroy();
     t.end();
   });

  t.end();
});
