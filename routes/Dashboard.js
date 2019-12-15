let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("I am here");
  // res.render('index', { title: 'Express' });
    res.redirect('/portal.html');
});

module.exports = router;