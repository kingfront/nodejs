//登录,注册控制层

//跳转到注册页面
exports.showSignup = function(req, res) {  
	res.render('sign/signup', { title: '用户注册' });
};

//进行注册
exports.signup = function(req, res) {  
	var userName = req.body.username;
	var password = req.body.password;
	var rePassword = req.body.rePassword;
	var email = req.body.email;
	console.log(req.body.userName+"-------"+req.body.password)

	req.checkBody('password', '密码不能为空').notEmpty();
    req.checkBody('confirmPassword', '两次密码不匹配').notEmpty().equals(req.body.password);

    var errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        return res.render('/signup', req.body);
    }

    var user = new User({
    	name: req.body.email.split('@').shift(),
    	email: req.body.email,
    	password: md5(req.body.password),
    	created: new Date(),
    });

    // user.save(function (err, user) {
    // 	if (err) {
    // 		console.log('admin/user/register error:', err);
    // 		req.flash('error', '用户注册失败');
    // 		res.render('admin/user/register');
    // 	} else {
    // 		req.flash('info', '用户注册成功');
    // 		res.redirect('/admin/users/login');
    // 	}
    // });

};

//跳转到登录页面
exports.showSignin = function(req, res) {  
	res.render('sign/signin', { title: '用户注册' });
};

//进行登录
exports.signin = function(req, res) {  
	console.log(req.body.username+"-------"+req.body.password)
	//res.redirect('/index');
};