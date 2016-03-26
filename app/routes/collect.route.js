'use strict';

// NPM Modules
var Core = require('../controllers/collect.controller');

module.exports = function(app, router) {
    app.route('/token')
        .get(Core.getToken);

    app.route('/createuser')
        .post(Core.createUser);

    app.route('/userdetails')
        .get(Core.getUserDetails);

    app.route('/createtransaction')
        .post(Core.createTransaction);

    app.route('/transactions')
        .get(Core.getTransactions);

    app.use(router);
};
