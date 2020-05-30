require('dotenv').config()
let router = require('express').Router()
let db = require('../models')

// POST /program - create new program
router.post('/', (req, res) => {
    db.program.create(req.body)
    .then(program => {
        res.send(program)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send({message: 'Server Error'})
    })
})

//get all data on programs needed at app level for donor to view
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