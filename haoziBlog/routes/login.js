//登录模块js

exports.login = function(req, res, next) {  

	res.render('login', { title: '用户登录' });
};

exports.doLogin = function(req, res, next) {  
	console.log(req.body.username+"-------"+req.body.password)
	//res.redirect('/index');
};
