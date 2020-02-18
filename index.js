// Required packages
require('dotenv').config() //provide access to variables inside .env files
let express = require('express')
let morgan = require('morgan')
let rowdyLogger = require('rowdy-logger')
let expressJwt = require('express-jwt')
let cors = require('cors')

// Instantiate app
let app = express()
let rowdyResults = rowdyLogger.begin(app)

// Set up middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false})) //Accept data from form
app.use(express.json()) // Accept data from AJAX call
app.use(cors())

// Controllers
app.use('/auth', require('./controllers/auth'))
// app.use('/programs', expressJwt({ // makes private
//     secret: process.env.JWT_SECRET 
//   }), require('./controllers/programs'))
  app.use('/programs', require('./controllers/programs'))
// app.use('/items', expressJwt({ // makes private
//     secret: process.env.JWT_SECRET 
//   }), require('./controllers/items'))
app.use('/items', require('./controllers/items'))
// app.use('/account', expressJwt({ // makes private
//     secret: process.env.JWT_SECRET 
//   }), require('./controllers/account'))

//Catch-all/error route
app.get('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' })
})

// Listen on local port
app.listen(process.env.PORT || 3000, () => {
    rowdyResults.print()
  })