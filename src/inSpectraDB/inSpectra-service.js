const inspectra = require('./inSpectra-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./Mongo').connect();

function get(req, res) {

    const docqurey = inspectra.find({}).read(ReadPreference.NEAREST);
    docqurey
        .exec()
        .then(records => {
            res.json(records);
        })
        .catch(err => {
            res.status(500).send(err);
        });
};

module.export = {

    get
};