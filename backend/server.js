require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const postRoutes = require('./routes/postRoutes')
const eventRoutes = require('./routes/eventRoutes')

//express app
const app = express()

//middlewares
app.use(express.json())
app.use(cors())

    // - gives a function of req.body
//routes
app.use('/admin/post', postRoutes)
app.use('/admin/event', eventRoutes)


// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


