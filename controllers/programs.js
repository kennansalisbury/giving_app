require('dotenv').config()
let router = require('express').Router()
let db = require('../models')
let jwt = require('jsonwebtoken')

//get all data for donor needed at app level
router.get('/:userid', (req, res) => {
    //find all programs
        //include organization & programItem details
        //get all giveritems num_purchased
        //send all giveritem details only for current user
    let data = []
    db.program.findAll({
        include: [
            db.organization,
            {
                model: db.programItem,
                include: [
                    {
                        model: db.giverItem,
                        attributes: ['num_purchased', ['userId', 'usd']]
                    }
                    
                ]
            }
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