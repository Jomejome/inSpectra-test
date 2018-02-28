const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const env = {

    dbName: 'inspectra-db',
    key: 'KqpVYA0yONibyKSf2wTk9hYaW4K7nyShkSe8BSU6aWrm34VA6BKOBv4gCC7Jc5KqKfQ7MdTFV91QXmczpp7dbA==',
    port: 10255
};

const mongoUri = 'mongodb://inspectra-db:KqpVYA0yONibyKSf2wTk9hYaW4K7nyShkSe8BSU6aWrm34VA6BKOBv4gCC7Jc5KqKfQ7MdTFV91QXmczpp7dbA==@inspectra-db.documents.azure.com:10255/?ssl=true&replicaSet=globaldb';

function connect() {

    return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {

    connect,
    mongoose
}