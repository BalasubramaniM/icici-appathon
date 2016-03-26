'use strict';

var mongoose = require('mongoose'),
    AccessModel,
    AccessSchema;

AccessSchema = new mongoose.Schema({
    client_id: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: new Date().toISOString()
    },
    updated_at: {
        type: String,
        default: new Date().toISOString()
    }
}, {
    versionKey: false
});

AccessModel = mongoose.model('token', AccessSchema);

module.exports = AccessModel;
