'use strict';
module.exports = function(app) {
    var UserController = require('../controller/loginController.js');

    app.route('/getAllUser')
    .post(UserController.create_entry)
    .get(UserController.list_all_entries);

    app.route('/updateEntry/:email')
    .put(UserController.update_a_user_contact)
    .delete(UserController.delete_user_details);

};