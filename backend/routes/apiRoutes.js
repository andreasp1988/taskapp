const express = require('express')
const router = express.Router()
const User = require('../models/user')


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

module.exports = router

