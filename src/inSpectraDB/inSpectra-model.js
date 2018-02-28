const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const inSchema = new Schema({

    id: { type: Number, required: true, unique: true },
    time: String,
    plant: String,
    area: String,
    RGB: String,
    PCA: String
});

const inSpectraDB = mongoose.model('inSpectraDB', inSchema);
module.exports = inSpectraDB;