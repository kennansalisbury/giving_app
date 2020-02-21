require('dotenv').config()
let router = require('express').Router()
let db = require('../models')
let jwt = require('jsonwebtoken')

// Define routes

// POST /auth/login (find and validate user; send token)
router.post('/login', (req, res) => {
    //Find the user, check if existing
    db.user.findOne({
      where: {email: req.body.email}
    }).then(user => {
      //make sure user exists and has a password
      if(!user || !user.password) {
        return res.status(404).send({ message: 'User not found' })
      }
      
      //if user exists, check password
      if(!user.validPassword(req.body.password)) {
        return res.status(401).send({ message: 'Invalid credentials' })
      }
  
      //good user - issue token
      let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 8
      })
      res.send( {token} )
    })
    .catch(err => {
      console.log(err)
      res.status(503).send({message: 'Database error' })
    })
  })


// POST /auth/signup (create new user; send token)
router.post('/signup', (req, res) => {
    db.user.findOrCreate({
        where: {email: req.body.email},
        defaults: req.body
    })
    .then(([user, wasCreated]) => { //confirms if new user was created or not
        if(wasCreated) {
            // this is the intended user action
            //Make new user a token
            let token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
            expiresIn: 60 * 60  //do shorter for dev/testing purposes, longer for deployment
          })
          //Send token
          res.send( {token} )
        } else {
            //the user already has an account
            return res.status(409).send({message: 'Email address already in use.'})
        }
    })
    .catch(err => {
        //Print out a general error to the terminal
        console.log('Error when creating a user', err)

        //check for validation errors (okay for user to see)
        if(err.name === 'ValidationError') {
            console.log(err)
            res.status(406).send({ message: 'Validation error!' })
          }
          else {
            console.log('Error creating user', err)
            res.status(500).send({message: err.message })
          }
    })
    
})
// Export the router object so we can include it in other files
module.exports = router