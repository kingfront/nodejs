var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var webRouter = require('./routes/web_router');
var multer = require('multer');
var signController = require('./controllers/sign');

// view engine setup
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//路由
// app.get('/index', require('./routes/index').index);
// app.get('/login', require('./routes/login').login);
// app.post('/doLogin', require('./routes/login').doLogin);
// app.use('/',require('./routes/index'));

app.get('/',require('./routes/index').index);
//跳转到注册页面
app.get('/signup',signController.showSignup);
//进行注册
app.post('/signup',signController.signup);
//跳转到登录页面
app.get('/signin',signController.showSignin);
//进行登录
app.post('/signin',signController.signin); 



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
