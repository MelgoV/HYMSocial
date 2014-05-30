module.exports= function(req,res,next){
	if (req.session.logged){
		return next();
	}
	else {
		res.view('user/index', {login_message: "Primero debes iniciar sesion"});
		return
	}
};