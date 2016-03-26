'use strict';

var mongoose = require('mongoose'),
    request = require('request'),
    AccessModel = require('../models/access.model'),
    UserModel = require('../models/user.model'),
    TransactionModel = require('../models/transaction.model'),
    URL = 'http://corporate_bank.mybluemix.net/',
    TYPE_OF_BANKING = 'corporate_banking/',
    NAME_OF_BANK = 'mybank/',
    QUERY_AUTH = 'authenticate_client?';

exports.getToken = function(data, next) {
    AccessModel.findOne({
        client_id: data.client_id
    }, function(dbError, res) {
        if (res === null) {
            getToken(data, function(err, response) {
                if (!err) {
                    response[0].client_id = data.client_id;
                    var token = new AccessModel(response[0]);
                    token.save(function(dbError, data) {
                        next(dbError, data);
                    });
                }
            });
        } else {
            next(null, res);
        }
    });
};

exports.createUser = function(data, next) {
    if (data !== null) {
        var userData = new UserModel(data);
        userData.save(function(dbError, data) {
            next(dbError, data);
        });
    }
};

exports.getUserDetails = function(data, next) {
    AccessModel.findOne({
        client_id: data.client_id,
        token: data.token
    }, function(dbError, res) {
        console.log(res);
        if (res !== null) {
            UserModel.findOne({
                client_id: data.client_id
            }, function(dbError, response) {
                next(dbError, response);
            });
        } else
            next(null, null);
    });
};

exports.createTransaction = function(data, next) {
    if (data !== null) {
        var transactionData = new TransactionModel(data);
        transactionData.save(function(dbError, data) {
            next(dbError, data);
        });
    } else {
        next(null, null);
    }
};

exports.getTransactions = function(data, next) {
    AccessModel.findOne({
        client_id: data.client_id,
        token: data.token
    }, function(dbError, res) {
        console.log(res);
        if (res !== null) {
            TransactionModel.find({
                client_id: data.client_id
            }, function(dbError, response) {
                next(dbError, response);
            });
        } else
            next(null, null);
    });
};

function getToken(body, callback) {
    var url = URL + TYPE_OF_BANKING + NAME_OF_BANK + QUERY_AUTH + 'client_id=' + body.client_id + '&' + 'password=' + body.password;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(null, JSON.parse(body));
        } else {
            callback(error);
        }
    });
};