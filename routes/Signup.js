let express = require('express');
let router = express.Router();
let Schema = require('../database/schema');

/* GET home page. */
router.post('/', function (req, res) {
	// console.log(req.body);
	let userSchema = Schema.user({
		Name: req.body.Name,
		Email: req.body.Email,
		Emergency:
			[
				{
					EmerName: req.body.EmerName1,
					Relation: req.body.Relation1,
					EmerContact: req.body.EmerContact1,
					EmerEmail: req.body.EmerEmail1
				},
				{
					EmerName: req.body.EmerName2,
					Relation: req.body.Relation2,
					EmerContact: req.body.EmerContact2,
					EmerEmail: req.body.EmerEmail2
				}
			],
		Password: req.body.Password,
		Type: 'user'
	});
	console.log(userSchema);
	userSchema.save(function (err, data) {
		if (err) throw err;
	});
	res.send("Your account has been created. Login to use your account.")
});

router.get('/', function (req, res, next) {
	// res.render('index', { title: 'Express' });
	res.redirect('/Registration.html');
});

module.exports = router;
