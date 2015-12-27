var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models').User;

passport.use('login', new LocalStrategy(function(email, password, done) {
  User.findOne({ where: { email: email } })
  .catch(function(err) { return done(err); })

  .then(function(user) {

  });
}));

passport.use('signup', new LocalStrategy({
  passReqToCallback: true
}, function(req, email, password, done) {
  console.log('3');
  console.log(email);
  console.log(password);
  console.log(req.body);

  User.findOne({ where: { email: email } })
  .catch(function(err) { return done(err); })

  .then(function(user) {
    if (user)
      return done(null, user);

    req.body.password = password;
    User.create(req.body)
    .catch(function(err) { return done(err); })

    .then(function(newUser) {
      return done(null, newUser);
    });
  });
}));

module.exports = passport;
