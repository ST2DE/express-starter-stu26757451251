var db = require('../models');
var User = db.user;

let authController = {
  
  doLogin : function(req,res){
     User.find({where:{username :req.body.loginname, password:req.body.loginpassword}})
          .then(function(user){
          if(user){
            res.cookie('isLogin',true,{path:'/',signed:true,maxAge:600000});
            return res.redirect('/tasks');
          }
          else{
            return res.redirect('/');
          }
     })
  }
  
  
};

module.exports = authController;