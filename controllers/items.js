require('dotenv').config()
let router = require('express').Router()
let db = require('../models')
let jwt = require('jsonwebtoken')


router.post('/giver', (req, res) => {

    // res.send(req.body)

    // createdOrUpdated = []
    
    // //for each element in data posted, find or create
    // req.body.forEach(item => {
         
        db.giverItem.findOrCreate({
            //look to see if there is another giveritem in the database with the same programItemId AND userId
            where: { programItemId: req.body.programItemId, userId: req.body.userId },
            defaults: {
                num_purchased: req.body.num_purchased,
                dollars_spent: req.body.dollars_spent
            }
        })
        .then(([i, wasCreated]) => {
            //if not created (means it was found), update num_purchased and dollars_spent fields
            if(!wasCreated) {             
                db.giverItem.update(
                    {
                        num_purchased: i.num_purchased += req.body.num_purchased,
                        dollars_spent: i.dollars_spent += req.body.dollars_spent
                    },
                    {
                        where: { programItemId :req.body.programItemId, userId:req.body.userId },
                        returning: true,
                        plain: true 
                    }
                )
                .then(result => {
                    console.log(`Found and updated ${result}`)
                    res.send(`Found and updated ${result}`)

                })
                .catch(err => {
                    console.log(err)
                    res.status(500).send({message: 'Error updating item', i})
                })
            //otherwise (if created), confirm item created
            } else {
                console.log('New item created', i)
                res.send(`New item created: ${i}`)
            }
        } )
        .catch(err => {
            console.log(err)
            res.status(500).send({message: `Database error when looking for item with programItemId: ${item.programItemId}`})
        })

    // })

    // return res.send(createdOrUpdated)

})


module.exports = router