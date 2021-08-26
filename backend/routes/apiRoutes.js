const express = require('express')
const router = express.Router()
const User = require('../models/user')

const Aufgabe = require('../models/aufgabe')


router.get('/aufgabe', (req, res) => {
    Aufgabe.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
})

router.get('/aufgabe/:id', (req, res) => {
    Aufgabe.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json({ message: "Not Found" }))
})

router.post('/aufgabe', (req, res) => {
    console.log(req.body)
    const contact = new Aufgabe(req.body)
    contact.save()
        .then(result => res.json({ redirect: "/addAufgabe" }))
        .catch(err => console.log(err))
})

router.delete('/aufgabe/:id', (req, res) => {
    Aufgabe.findByIdAndDelete(req.params.id)
        .then(result => res.json({ redirect: "/home" }))
        .catch(err => res.json(err))
})


router.get('/', (req, res) => {
    User.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
})
router.post('/', (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then(result => res.json({ redirect: "/home" }))
        // .then(result => console.log("Das ist der Finn", result))
        .catch(err => console.log(err))
})
router.get('id', (req, res) => {
    console.log(req.params.id)
    User.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json({ message: "User not found" }))
})



module.exports = router

