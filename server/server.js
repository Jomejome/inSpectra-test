const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const config = require('./config')

const app = express()
const PORT = 3003

const index = require('./route/index')

mongoose.Promise = global.Promise;

options = {
    useMongoClient: true,
    dbName: 'GasMonitor',
    user: config.dbName,
    pass: config.key
};

mongoose.connect(`mongodb://${config.dbName}:${config.key}@${config.dbName}.documents.azure.com:${config.cosmosPort}/?ssl=true`, options, (err) => {
    if (err) console.log('connect fail')
    else {
        console.log('connect success')
    }
})


app.use('*', cors({ origin: 'http://localhost:3000' }))

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use('/', index)

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})