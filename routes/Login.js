let express = require('express');
let passport = require('passport');
let router = express.Router();

router.post('/',passport.authenticate(['local.user'],{failureRedirect: '/'}),function (req,res) {
  console.log('HERE USER')
  console.log(req.user);
  // res.send('you are now logged in..');
  res.redirect('/dashboard');
});

/* GET Admin Login page. */
/*router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.redirect('/AdminLogin.html');
});*/

module.exports = router;
