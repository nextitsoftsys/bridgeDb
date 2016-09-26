/**connect mongoose and define schema and exports it  */

var mongoose=require('mongoose');

var config = require('../config/config');
mongoose.connect(config.MONGO_URI);

var userSchema=mongoose.Schema({

     email:{type:String ,unique: true, lowercase: true},
     password:{type:String,select: false},
     displayName: String,
     picture: String,
     github: String
 });
 var project=mongoose.Schema({
      projectName :{type:String ,required:true},
     //  password:{type:String,required:true}
  });

  var project=mongoose.model('project',project);
 exports.project=project;
 var User=mongoose.model('User',userSchema);
exports.User=User;
