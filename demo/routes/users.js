var express = require('express');
var router = express.Router();
var User = require('../../models').User;

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id)
  .catch(function(err) { throw err; })

  .then(function(user) {
    var subTitle = user.firstName + ' ' + user.lastName + ' |';
    res.render('demoUser', { user: user, subTitle: subTitle, demo: true });
  });
});

module.exports = router;
