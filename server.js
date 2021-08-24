require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
<<<<<<< HEAD
const PORT = process.env.PORT || 6000
=======
const PORT = process.env.PORT || 5000
>>>>>>> e89c4fa34eacb0dd3a25e056155b9643fd7a8d69
const app = express()
const apiRoutes = require('./backend/routes/apiRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(result => {
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    })
    .catch(err => console.log(err))

app.use('/api', apiRoutes)
