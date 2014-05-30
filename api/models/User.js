/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */
/*var bcrypt= require('bcrypt-nodejs');*/

module.exports = {
	/*Model User Begin*/
	/*Note 
		cb=Callback
		install bcrypt
	*/
  attributes: {
  	nickname:{
  		type:'STRING',
  		required:true
  	},

  	password:{
  		type:'STRING',
  		minLength: 6,
  		required:true
      	/*columnName: 'encrypted_password'*/
  	},

  	nombre:{
  		type:'STRING',
  		required:true

 	},
  	e_mail:{
  		type:'email',
  		required:true
  	},
  	loggedin:'boolean',

  	toJSON: function(){
  		var obj = this.toObject();
  		delete obj.password;
  		delete obj._csrf;
  		return obj;
  	}
  	/*Model User Begin End*/
  }/*,
  beforeCreate: function(values,cb){
  	bcrypt.hash(values.password,8, function(err,hash){
  		if(err) return cb(err);
  		values.password=hash;
  		cb();
  	});
  }*/
};
