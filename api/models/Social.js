/**
 * Social
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	nickname:{
   		type:'STRING',
  		required:true 		
  	},
  	comentario:{
   		type:'STRING',
  		required:true 		
  	},
  	fecha:{
  		type:'DATE',
  		required:true 	
  	},
  	likes:{
  		type:'ARRAY'
  	},
  	unlikes:{
  		type:'ARRAY'
  	}
  	/* e.g.
  	nickname: 'string'
  	*/
    
  }

};
