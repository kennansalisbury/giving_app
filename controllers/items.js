require('dotenv').config()
let router = require('express').Router()
let db = require('../models')
let jwt = require('jsonwebtoken')


router.post('/', (req, res) => {
    //find or create
   
    
    res.send('Post route for giver items')
})


module.exports = router