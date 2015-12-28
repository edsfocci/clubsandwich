var express = require('express');
var router = express.Router();
// var Club = require('../../models').Club;

router.get('/new', function(req, res) {
  res.render('demoClubNew', { subTitle: 'Club Registration |', demo: true });
});

module.exports = router;
