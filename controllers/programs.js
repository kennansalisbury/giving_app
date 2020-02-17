require('dotenv').config()
let router = require('express').Router()
let db = require('../models')
let jwt = require('jsonwebtoken')

//get all data for donor needed at app level
router.get('/:userid', (req, res) => {
    //find all programs, include programItems, organization, giverItems
    let data = []
    db.program.findAll({
        include: [
            db.organization,
            db.programItem
        ]
    })
    .then(programs => {
        data.push({programs: programs})
        db.giverItem.findAll({
            where: {userId: req.params.userid}
        })
        .then(giverItems => {
            data.push({giverItems: giverItems})
            res.send(data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({message: 'Server Error'})
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).send({message: 'Server Error'})
    })
})

module.exports = router