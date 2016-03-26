'use strict';

var mongoose = require('mongoose'),
    TransactionModel,
    TransactionSchema;

TransactionSchema = new mongoose.Schema({
    client_id: {
        type: String,
        required: true
    },
    account_number: {
        type: String,
        required: true
    },
    payee_account_number: {
        type: String,
        required: false
    },
    payee_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    transaction_amount: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
        required: true
    },
    reference_number: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true,
        default: new Date().toISOString()
    },
    type_of_transaction: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: new Date().toISOString()
    }
}, {
    versionKey: false
});

TransactionModel = mongoose.model('transaction', TransactionSchema);

module.exports = TransactionModel;
