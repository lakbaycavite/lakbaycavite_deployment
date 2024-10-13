const express = require('express')
const Event = require('../models/eventModel')
const {
    getEvent,
    getEvents,
    createEvent,
    deleteEvent,
    updateEvent
} = require('../controller/eventController')

const router = express.Router()

// show all events
router.get('/', getEvents)

// get a single event
router.get('/:id', getEvent)

// create an event
router.post('/', createEvent)

// update an event
router.put('/update/:id', updateEvent)

// Delete an event
router.delete('/delete/:id', deleteEvent)

module.exports = router