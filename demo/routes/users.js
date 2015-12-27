// module.exports = function(passport) {
var express = require('express');
var router = express.Router();
var User = require('../../models').User;
var bcrypt = require('bcrypt-nodejs');
// var passpor = require('../../config/passport');

router.get('/signup', function(req, res, next) {
  res.render('demoUserSignup');
});

router.post('/signup', function(req, res) {
  User.find({ where: { email: req.body.email } })
  .catch(function(err) { throw err; })

  .then(function(user) {
    if (user)
      return res.redirect('/demo/users/' + user.id);

    req.body.password = bcrypt.hash(req.body.password, null, null,
      function(err, hash) {
      if (err)
        throw err;

      req.body.password = hash;

      console.log(req.body);
      User.create(req.body)
      .catch(function(err) { throw err; })

      .then(function(newUser) {
        return res.redirect('/demo/users/' + newUser.id);
      });
    });
  });

  // TODO: Get passport.js to work
  // passpor.authenticate('signu', function(err, user, info) {
  //   console.log('2');
  //   console.log(err);
  //   console.log(user);
  //   console.log(info);
  // });
  // res.redirect('/' + req.user.id);
});

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id)
  .catch(function(err) { throw err; })

  .then(function(user) {
    res.render('demoUser', { user: user });
  });
});

module.exports = router;
//   return router;
// };
