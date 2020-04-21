'use strict';

var User = require('../model/loginModel.js');

//Post    
exports.create_entry = function(req, res) {
    var new_user = new User(req.body);
   // console.log(req.body);
    User.createEntry(new_user, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };

  //get All user
exports.list_all_entries = function(req, res) {
    User.getAllEntries(function(err, user) {
      console.log('controller')
      if (err)
        res.send(err);
       // console.log('res', user);
      res.send(user);
    });
  };

//updating contact detail based on emailID
  exports.update_a_user_contact = function(req, res) {
    var data = new User(req.body);
    console.log(data);
     User.updateUserContact(data,req.params.email,function(err, user) {
       if (err)
         res.send(err);
       res.json(user);
     });
   };


   //deleting the entry based on emailID
   exports.delete_user_details = function(req,res){
    var data = new User(req.body);

    User.deleteUserDetails(req.params.email,function(err,user){
      
      if (err)
         res.send(err);
       res.json(user);

    });
   };
