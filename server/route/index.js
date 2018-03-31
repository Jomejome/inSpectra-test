const express = require('express')
const mongoose = require('mongoose')
const pcaResult = require('../model/pcaResult')
const query2mongo = require('query-to-mongo')

const index = express.Router()

index.use((req, res, next) => {
    next()
})

index.route('/')
    .get((req, res) => {
        pcaResult.find({}, (err, docs) => {
            res.send(docs)
        })
    })
    .post((req, res) => {
        const newpcaResult = pcaResult(req.body)
        newpcaResult.save((err) => {
            if (err) res.send('insert error')
            else res.send('insert success')
        })
    })

index.route('/:id')
    .get((req, res) => {
        pcaResult.findById(req.params.id, (err, docs) => {
            res.send(docs)
        })
    })
    .put((req, res) => {
        pcaResult.findByIdAndUpdate(req.params.id, req.body, (err) => {
            if (err) res.send('update error')
            else res.send('update success')
        })
    })
    .delete((req, res) => {
        pcaResult.findByIdAndRemove(req.params.id, (err) => {
            if (err) res.send('delete error')
            else res.send('delete success')
        })
    })


module.exports = index