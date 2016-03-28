var express = require('express');
var router = express.Router();
var signController = require('../controllers/sign');


//跳转到注册页面
router.get('/signup',signController.showSignup);

//进行注册
router.post('/signup',signController.signup);

//跳转到登录页面
router.get('/signin',signController.showSignin);

//进行登录
router.post('/signin',signController.signin);	