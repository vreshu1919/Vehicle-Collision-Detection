let express = require('express');
let path = require('path');
//let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let passport = require('passport');
// let expressValidator = require('express-validator');
let session = require('express-session');
// let bcrypt = require('bcrypt');
const saltRounds = 10;

require('./config/passport');
let indexRouter = require('./routes/index');
let adminLoginRouter = require('./routes/adminLogin');
let LoginRouter = require('./routes/Login');
let adminRegisterRouter = require('./routes/adminSignup')
let SignupRouter = require('./routes/Signup');
let adminDashboardRouter = require('./routes/adminDashboard');
let DashboardRouter = require('./routes/Dashboard');
let MailRouter = require('./routes/Mail');
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator());
app.use(cookieParser());
app.use(session({
	secret: 'dog is here', resave: false, saveUninitialized: false,
	expires: new Date(Date.now() + (30 * 86400 * 1000))
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
if (app.get('env') === 'development') {
	app.locals.pretty = true;
}

app.use('/', indexRouter);
app.use('/admin', adminLoginRouter);
app.use('/login',LoginRouter);
app.use('/adminSignup', adminRegisterRouter);
app.use('/Signup', SignupRouter);
app.use('/adminDashboard', adminDashboardRouter);
app.use('/dashboard', DashboardRouter);
app.use('/mail',MailRouter);

// app.use('/UnderConstruction', ()=> {
//     res.render('Under Construction', { title: 'Under Construction'});
// });

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

app.use('/success', function(req, res){
    console.log("User Sent");
    res.send(req.user);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;