/**
 * Comentario
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	id_video:{
  		type:'STRING',
  		required:true
  	},
  	nickname:{
  		type:'STRING',
  		required:true},
  	comentario:{
  		type:'STRING',
  		required:true}
  }

};
