module.exports = {
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  render: function(req, res, next){

    if(typeof(req.session.logged) !== "undefined"){
        if (req.session.logged){
        Capacitaciones.find(function foundCapacitaciones(err,capacitacion){
          if (err){
            console.log(err);
            return next(err);
          }
          if (capacitacion){          
            res.view('capacitaciones/login',{capacitaciones:capacitacion});
          }
        });
      }
      else{
        res.view('user/index');
      }
    }
    else {
      
      res.view('user/index');
    }
  }, 

  new: function (req, res, next){
    res.view();
  }, 
  create: function(req,res,next){
    User.create(req.params.all(),function userCreated (err, user){
      if (err) {
        req.session.flash={
          err: err
        }
        return res.redirect('/');
      }
      res.view('user/show',{user:user});
    });
  },

  show: function(req, res, next){
    User.findOne(req.param('id'), function foundUser(err, user){
      if (err) return next(err);
      if(!user) return next();
      res.view('user/show',{user:user});
    });
  }

  /*_config: {}*/
};