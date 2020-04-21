'user strict';
var sql = require('./db.js');

//Task object constructor
var User = function(task){
    this.ID=task.ID;
    this.firstName=task.firstName;
    this.lastName=task.lastName;
    this.email=task.email;
    this.contact=task.contact;
    this.address=task.address;
    this.noOfMembers=task.noOfMembers;
    this.daysOfStay=task.daysOfStay;
    this.dateOfCheckin=task.dateOfCheckin;
    this.dateOfCheckout=task.dateOfCheckout;
    //this.roles=task.roles;
};


//Creating an entry
User.createEntry = function (newUser, result) {    
    sql.query("INSERT INTO hotel_management set ?", [newUser], function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};

//list all users
User.getAllEntries = function (result) {
    sql.query("Select * from hotel_management", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('User : ', res);  

             result(null, res);
            }
        });   
};

//Update contact detail based on emailID
User.updateUserContact = function (data,email, result) {    
    sql.query("UPDATE hotel_management set contact=? where email=?", [data.contact,email], function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};



//deleting the entry based on emailID
User.deleteUserDetails = function(email,result){
    sql.query("DELETE FROM hotel_management WHERE email = ?", [email], function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
      
        }
    });
}
module.exports= User;