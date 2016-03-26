'use strict';

var access = require('safe-access'),
    http = require('http');

exports.handler = function(err, req, res, next) {
    
    var code,
        message;

    code = parseInt(err.status) || 500;
    message = err.message;

    //Client Should not affected by any errors
    res
        .status(200)
        .json({
            status: 'error',
            code: code,
            message: http.STATUS_CODES[code]
        });
};
