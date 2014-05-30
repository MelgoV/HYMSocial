module.exports = function(req,res,next){
	/*Declaro una variable de session llamada flash, en res*/
	res.locals.flash= {};
	/* Verifico si la variable de session llamada flash esta en req*/
	if(!req.session.flash) return next();

	/* res.flash=req.flash*/
	res.locals.flash = _.clone(req.session.flash);
	/*limpio req.flash*/
	req.session.flash={};
	/*Nos juimo*/
	next();
};