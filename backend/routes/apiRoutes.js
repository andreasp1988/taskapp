const express = require('express')
const router = express.Router()
const User = require('../models/user')

// const Aufgabe = require('../models/aufgabe')


// router.get('/', (req, res) => {
//     Aufgabe.find()
//         .then(result => res.json(result))
//         .catch(err => console.log(err))
// })

// router.post('/', (req, res) => {
//     console.log(req.body)
// })



router.get('/', (req, res) => {
    User.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
})
router.post('/', (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then(result => res.json(result))
        .catch(err => console.log(err))
})
router.get('id', (req, res) => {
    console.log(req.params.id)
    User.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json({ message: "User not found" }))
})



module.exports = router

