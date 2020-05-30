require('dotenv').config()
let router = require('express').Router()
let db = require('../models')

router.get('/:id', (req, res) => {
    // res.send({message: 'GET ACCOUNT INFO'})

    db.giverItem.findAll({
        where: {userId: req.params.id},
        attributes: ['num_purchased', 'dollars_spent'],
        include: [{
            model: db.programItem,
            attributes: ['name', 'goal_num'],
            include: [{
                model: db.program,
                attributes: ['name']
            }]
        }]
    }).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.status(500).send({message: 'Server Error'})
    })

})

module.exports = router