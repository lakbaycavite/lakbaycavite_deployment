const Event = require('../models/eventModel')
const mongoose = require('mongoose')

// get all event
// const getEvents = async (req, res) => {
//     const events = await Event.find({}).sort({ createdAt: -1 })
//     res.status(200).json(events)
// }       

const getEvents = async (req, res) => {
    // const events = await Event.find({}).sort({ createdAt: -1 })
    // res.status(200).json(events)

    try{
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip = (page - 1) * limit

        const total = await Event.countDocuments()
        const events = await Event.find().skip(skip).limit(limit)

        res.status(200).json({ events, total, page, pages: Math.ceil(total/ limit), total })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}    

// get a single event
const getEvent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such event' })
    }


    const event = await Event.findById(id)

    if (!event) {
        return res.status(404).json({ error: 'No such event' })
    }

    res.status(200).json(event)
}

// create new event
const createEvent = async (req, res) => {
    const { title, description, imageUrl, eventType } = req.body

    try {
        const event = await Event.create({ title, description, imageUrl, eventType })
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete an event
const deleteEvent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such event' })
    }

    const event = await Event.findOneAndDelete({ _id: id })

    if (!event) {
        return res.status(404).json({ error: 'No such event' })
    }

    res.status(200).json(event)

}

// update an event

const updateEvent = async (req, res) => {
    const { id } = req.params
    const { content, profileName, imageUrl, comments } = req.body


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such event' })
    }

    const event = await Event.findOneAndUpdate({ _id: id }, {
        content,
        profileName,
        imageUrl,
        comments
    })

    if (!event) {
        return res.status(404).json({ error: 'No such event' })
    }

    res.status(200).json(event)
}

module.exports = {
    getEvents,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent
}