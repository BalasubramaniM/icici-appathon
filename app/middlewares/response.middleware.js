'use strict';

var _ = require('lodash');

exports.responseMiddleware = function(req, res, next) {

    res.sendSuccess = function(data) {
        res.status(200).json(data);
    };

    res.sendParamsMissingError = function(requestData, errorMsg) {
      res.status(200)
          .json({
              status: 'error',
              code: 404,
              message: errorMsg
          });
    };

    res.sendSchemaError = function(requestData, errorMsg) {
        requestData.error = _.pluck(errorMsg, 'message');
        res.status(400)
            .json({
                status: 'error',
                code: 400,
                message: _.pluck(errorMsg, 'message')
            });
    };

    res.versionNotSupported = function(requestData) {
        requestData.error = 'This version is not supported';
        res
            .status(200)
            .json({
                status: 'error',
                code: 404,
                message: requestData.error
            });
    };

    res.sendNoContent = function(data) {
        res.status(201)
            .json({
                status: 'success',
                code: 201,
                message: 'There is no configurations in storage'
            });
    };

    res.sendDbError = function() {
        res.status(200)
            .json({
                status: 'error',
                code: 404,
                message: 'Database error. Problem connecting to the MongoDB'
            });
    };

    res.sendBadRequest = function(data) {
        res.status(200)
            .json({
                status: 'error',
                code: 404,
                message: 'Bad Request'
            });
    };

    res.sendNotFound = function() {
        res
            .status(404)
            .json({
                status: 'error',
                code: 404,
                message: 'Not Authorized. Please check the input you have provided.'
            });
    };

    res.sendUnauthorized = function() {
        res
            .status(200)
            .json({
                status: 'error',
                code: 401,
                message: 'You are not authenticated to use this service. Please check the input (appID).'
            });
    };

    res.sendNoDataToProcess = function() {
        res
            .status(200)
            .json({
                status: 'error',
                code: 401,
                message: 'No Data to Process'
            });
    };

    return next();
};
