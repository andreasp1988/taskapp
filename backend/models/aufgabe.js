const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aufgabeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    datum: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    ende: {
        type: String,
        required: true
    },
    beschreibung: {
        type: String,
        required: true
    },
    kategorie: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Aufgabe = mongoose.model('aufgabe', aufgabeSchema)

module.exports = Aufgabe