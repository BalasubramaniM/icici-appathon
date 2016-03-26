'use strict';

/**
 * Name : Express JS
 * Description : It is the core part of this application. It have application configuration and essential functionalities
 */

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    cors = require('cors'),
    applicationResopnse = require('../app/middlewares/response.middleware'),
    errors = require('../app/middlewares/error.middleware');

module.exports = function() {
    var app = express();

    global.config = config;

    //Application Configuration
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(applicationResopnse.responseMiddleware);
    app.disable('x-powered-by');

    //CORS ENABLED
    app.use(cors());

    // Showing stack errors
    app.set('showStackError', true);

    /* Add our server node extensions */
    require.extensions['.controller.js'] = require.extensions['.js'];
    require.extensions['.routes.js'] = require.extensions['.js'];

    /* Route Configuration */
    var router = express.Router();

    // Globbing routing files
    config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
        require(path.resolve(routePath))(app, router);
    });

    app.use(errors.handler);

    module.exports = app;

    return app;
};
