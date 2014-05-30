/**
 * CapacitacionesController
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
	show : function (req, res, next){
		Capacitaciones.findOne({id: req.param('id')}).exec(function (err,capacitacion){
			if (err) return next(err);
			if(capacitacion){
				res.view('capacitaciones/show', {capacitaciones: capacitacion});
			}
			else{
				return next();
			}
		});
	},
	comment: function(req,res,next){
		Capacitaciones.findOne({id: req.param('id')}).exec(function (err,capacitacion){
			if (err) return next(err);
			if(capacitacion){
				var fec_comment = new Date();
				capacitacion.comentarios.push({"usuario":req.session.username,"comentario":req.param('comentario'),
					"fecha":fec_comment});
				capacitacion.save(function (err){
					if (err){
						return res.send(err,500);
					}
					Capacitaciones.publishUpdate(capacitacion.id,{id:capacitacion.id});

					res.view('capacitaciones/show', {capacitaciones: capacitacion});
				});
			}
			else{
				return next(err);
			}
		});
	},

	subscribe: function (req,res){
		Capacitaciones.find(function foundCapacitaciones(err,capacitacion){
          if (err){
            return res.send(err,500);
          }
          if (capacitacion){          
          	console.log("Yes socket");
            Capacitaciones.subscribe(req.socket);

            Capacitaciones.subscribe(req.socket, capacitacion);
            res.send(200);
          }
        });
	}

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to CapacitacionesController)
   */
  /*_config: {}*/

  
};
