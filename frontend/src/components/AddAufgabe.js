import Nav from "./Nav";
import '../css/AddUpdAufgabe.css'

import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios"


const AddAufgabe = () => {
    const [inputs, setInputs] = useState({ name: "", datum: "", start: "", ende: "", beschreibung: "", kategorie: "" })
    const [startDate, setStartDate] = useState(new Date());

    const handleInputs = (event) => {
        // console.log(event)
        // console.log(event.target)
        setInputs(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleDateInput = (date) => {
        setStartDate(date)
        // console.log(date)
        // console.log(date.toLocaleDateString())
        setInputs({ ...inputs, datum: date.toLocaleDateString('de-DE') })

    }

    const handleTimeStartInput = (value) => {
        // console.log(value._d)
        // console.log(value._d.getHours() + ":" + value._d.getMinutes())
        // console.log(value._d.getMinutes())
        const hour = value._d.getHours() < 10 ? "0" + value._d.getHours() : value._d.getHours()
        const minuten = value._d.getMinutes() < 10 ? "0" + value._d.getMinutes() : value._d.getMinutes()
        setInputs({ ...inputs, start: hour + ":" + minuten })
        // setInputs({ ...inputs, start: value._d.getHours() + ":" + value._d.getMinutes() })
        // setInputs({ ...inputs, start: value._d })
    }

    const handleTimeEndeInput = (value) => {
        // console.log(value._d)
        const hour = value._d.getHours() < 10 ? "0" + value._d.getHours() : value._d.getHours()
        const minuten = value._d.getMinutes() < 10 ? "0" + value._d.getMinutes() : value._d.getMinutes()
        setInputs({ ...inputs, ende: hour + ":" + minuten })
        // setInputs({ ...inputs, ende: value._d.getHours() + ":" + value._d.getMinutes() })
    }

    const handleCategoryInput = (e) => {
        // console.log(e)
        // console.log(e.target.value)
        setInputs({ ...inputs, kategorie: e.target.value })
    }

    const saveAufgabe = () => {
        axios.post('/api/aufgabe', inputs)
            .then(result => window.location.href = result.data.redirect)
            // .then(result => console.log(result))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="addAufgabe">
                <h1>Aufgabe hinzufügen</h1>
                <form action="">
                    <div className="flex">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Kleiderschrank ausmisten" value={inputs.name} onChange={handleInputs} />
                    </div>
                    <div className="flex">
                        <label htmlFor="datum">Datum</label>
                        {/* <input type="text" name="datum" id="datum" placeholder="27.08.2021" /> */}
                        <DatePicker className="bg" selected={startDate} onChange={(date) => handleDateInput(date)} />
                        {/* <DatePicker className="bg" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                    </div>
                    <section className="startEnde">
                        <div className="flex">
                            <label htmlFor="start">Start</label>
                            <TimePicker className="bgZeit" defaultValue={moment()} showSecond={false} minuteStep={15} onChange={handleTimeStartInput} />
                        </div>
                        <div className="flex">
                            <label htmlFor="ende">Ende</label>
                            <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} onChange={handleTimeEndeInput} />
                        </div>
                    </section>
                    <div className="flex">
                        <label htmlFor="descript">Beschreibung</label>
                        <input type="text" name="beschreibung" id="descript" placeholder="Beschreibung der Tätigkeit" value={inputs.value} onChange={handleInputs} />
                    </div>
                    <section className="category">
                        <label>Kategorie</label>
                        <section>
                            <input type="radio" name="kategorie" id="ausstehend" value="Ausstehend" onClick={handleCategoryInput} />
                            <label htmlFor="ausstehend">Ausstehend</label>
                            <input type="radio" name="kategorie" id="fertig" value="Fertig" onClick={handleCategoryInput} />
                            <label htmlFor="fertig">Fertig</label>
                        </section>
                        <section>
                            <input type="radio" name="kategorie" id="bearbeitung" value="In Bearbeitung" onClick={handleCategoryInput} />
                            <label htmlFor="bearbeitung">In Bearbeitung</label>
                            <div><img src="/img/plus.png" alt="" /></div>
                        </section>
                    </section>
                </form>
                <button onClick={saveAufgabe}>Erstellen </button>
            </div>
            <Nav />
        </>

    );
}

export default AddAufgabe;