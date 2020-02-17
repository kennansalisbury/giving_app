require('dotenv').config()
let router = require('express').Router()
let db = require('../models')
let jwt = require('jsonwebtoken')

//get all data for donor needed at app level
router.get('/', (req, res) => {
    res.send('PROGRAMS STUB')
    //find all programs, include programItems, organization, giverItems?
})

module.exports = router