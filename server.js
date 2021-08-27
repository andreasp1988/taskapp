require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const app = express()
const apiRoutes = require('./backend/routes/apiRoutes')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "frontend", "build")))

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(result => {
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    })
    .catch(err => console.log(err))

app.use('/api', apiRoutes)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"))
})