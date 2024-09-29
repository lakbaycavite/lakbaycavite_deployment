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
router.get('/', getEvent)

// create an event
router.post('/', createEvent)

// update an event
router.put('/:id', updateEvent)

// Delete an event
router.delete('/:id', deleteEvent)

module.exports = router