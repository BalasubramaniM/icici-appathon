'use strict';

var mongoose = require('mongoose'),
    UserModel,
    UserSchema;

UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    client_id: {
        type: String,
        required: true
    },
    account_number: {
        type: String,
        required: true
    },
    account_type: {
        type: String,
        required: true
    },
    account_status: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    },
    salary: {
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

UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
