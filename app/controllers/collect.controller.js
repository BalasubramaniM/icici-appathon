'use strict';

// custom modules
var collectService = require('../services/collect.service'),
    // NPM Modules
    access = require('safe-access');

exports.getToken = function(req, res, next) {
    collectService.getToken(req.query, function(dbError, data) {
        if (dbError) {
            res.sendDbError();
        } else {
            res.sendSuccess(data);
        }
    });
};

exports.createUser = function(req, res, next) {
    var modelData = access(req, 'body');
    collectService.createUser(modelData, function(dbError, data) {
        if (dbError) {
            res.sendDbError();
        } else {
            res.sendSuccess(data);
        }
    });
};

exports.getUserDetails = function(req, res, next) {
    collectService.getUserDetails(req.query, function(dbError, data) {
        if (dbError) {
            res.sendDbError();
        } else if (data === null) {
            res.sendNotFound();
        } else {
            res.sendSuccess(data);
        }
    });
};

exports.createTransaction = function(req, res, next) {
    var modelData = access(req, 'body');
    collectService.createTransaction(modelData, function(dbError, data) {
        if (dbError) {
            res.sendDbError();
        } else if (data === null) {
            res.sendNotFound();
        } else {
            res.sendSuccess(data);
        }
    });
};

exports.getTransactions = function(req, res, next) {
    collectService.getTransactions(req.query, function(dbError, data) {
        if (dbError) {
            res.sendDbError();
        } else if (data === null) {
            res.sendNotFound();
        } else {
            res.sendSuccess(data);
        }
    });
};