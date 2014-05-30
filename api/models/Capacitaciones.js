/**
 * Capacitaciones
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
  	title:{
  		type:'STRING',
  		required:true
    },
  	urlmp4:{
  		type:'STRING',
  		required:true
  	},
  	urlogv:{
  		type:'STRING',
  		required:true
  	},
  	likes:{
  		type:'integer'
  	},
  	unlikes:{
  		type:'integer'
  	},
    comentarios:{
      type:'array'
    }  	
  }
};
