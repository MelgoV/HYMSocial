/**
 * SesionesController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  login: function (req, res, next) {
    if (!req.param('nickname') || !req.param('password')){
      res.view('user/index', {login_message: "Por favor ingrese usuario y contraseña."});
      return;
    }

    var username = req.param('nickname');
    var passw = req.param('password');

    User.findOneByNickname(username).exec(function(err, users){
      if (err){
        console.log(err);
        return next(err);
      }
      if (users){
        if(users.password===passw){
          Capacitaciones.find(function foundCapacitaciones(err,capacitacion){
            if (err){
              console.log(err);
              return next(err);
            }
            if (capacitacion){
              req.session.username=req.param('nickname');
              req.session.logged= true;
              req.session.flash={
                sesion: users
              }
              
              res.view('capacitaciones/login',{capacitaciones:capacitacion});
            }
            else{
              res.view('user/index', {login_message: "No hay contenido"});
            }
          });
        }
        else
        {
          res.view('user/index', {login_message: "Contraseña invalida!"});
        }
      } else {
        res.view('user/index', {login_message: "Usuario inexistente!"});
      }

    });
  },

  logout: function(req, res, next){
    req.session.username=undefined;
    req.session.logged= false;  
    res.view('user/index');	
  }


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to SesionesController)
   */
  /*_config: {}*/

  
};
