const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const pcaResult = mongoose.model('pcaResult', new Schema({
    plant: String,
    area: String,
    timestamp: {
        $date: Number
    },
    visible: String,
    false: String,
    falsePca: String,
    fetchStatus: Boolean
}, { collection: 'pcaResults' }));

module.exports = pcaResult