let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log('i am here')
    res.redirect('/AdminDashboard.html');
});

module.exports = router;
