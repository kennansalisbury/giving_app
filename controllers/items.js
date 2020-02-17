require('dotenv').config()
let router = require('express').Router()
let db = require('../models')
let jwt = require('jsonwebtoken')


module.exports = router