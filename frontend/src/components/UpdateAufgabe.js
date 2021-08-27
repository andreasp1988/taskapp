import ButtonAddUpd from "./ButtonAddUpd";
import Nav from "./Nav"
import '../css/AddUpdAufgabe.css'

import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

const UpdateAufgabe = () => {
    const [inputs, setInputs] = useState({ name: "", datum: "", start: "", ende: "", beschreibung: "", kategorie: "" })
    // const [startDate, setStartDate] = useState(new Date());
    const [aufgabe, setAufgabe] = useState(null)

    let { id } = useParams()
    console.log(id)

    useEffect(() => {
        if (!aufgabe) {
            axios.get(`/api/aufgabe/${id}`)
                .then(result => setAufgabe(result.data))
                .catch((err) => console.log(err))
        }
    })

    const handleInputs = (event) => {
        setInputs(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    // const handleDateInput = (date) => {
    //     setStartDate(date)
    //     setInputs({ ...inputs, datum: date.toLocaleDateString('de-DE') })
    // }

    const handleTimeStartInput = (value) => {
        const hour = value._d.getHours() < 10 ? "0" + value._d.getHours() : value._d.getHours()
        const minuten = value._d.getMinutes() < 10 ? "0" + value._d.getMinutes() : value._d.getMinutes()
        setInputs({ ...inputs, start: hour + ":" + minuten })
    }

    const handleTimeEndeInput = (value) => {
        const hour = value._d.getHours() < 10 ? "0" + value._d.getHours() : value._d.getHours()
        const minuten = value._d.getMinutes() < 10 ? "0" + value._d.getMinutes() : value._d.getMinutes()
        setInputs({ ...inputs, ende: hour + ":" + minuten })
    }

    const handleCategoryInput = (e) => {
        setInputs({ ...inputs, kategorie: e.target.value })
    }

    // const updateAufgabe = (inputs) => {

    //     axios.put(`/api/aufgabe/${id}`, inputs)
    //         .then(result => window.location.href = result.data.redirect)
    //         .catch(err => console.log(err))
    // }


    return (
        <div className="addAufgabe">
            <h1>Aufgabe bearbeiten</h1>
            {aufgabe && (
                <form >
                    <div className="flex">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={aufgabe.name} onChange={handleInputs} />
                    </div>
                    <div className="flex">
                        <label htmlFor="datum">Datum</label>
                        <DatePicker className="bg" value={aufgabe.datum} />
                    </div>
                    <section className="startEnde">
                        <div className="flex">
                            <label htmlFor="start">Start</label>
                            <TimePicker className="bgZeit" defaultValue={moment({ hour: aufgabe.start.substr(0, 2), minute: aufgabe.start.substr(3, 2) })} showSecond={false} minuteStep={15} onChange={handleTimeStartInput} />
                        </div>
                        <div className="flex">
                            <label htmlFor="ende">Ende</label>
                            <TimePicker defaultValue={moment({ hour: aufgabe.ende.substr(0, 2), minute: aufgabe.ende.substr(3, 2) })} showSecond={false} minuteStep={15} onChange={handleTimeEndeInput} />
                        </div>
                    </section>
                    <div className="flex">
                        <label htmlFor="descript">Beschreibung</label>
                        <input type="text" name="beschreibung" id="descript" value={aufgabe.beschreibung} onChange={handleInputs} />
                    </div>
                    <section className="category">
                        <label>Kategorie</label>
                        <section>
                            {aufgabe.kategorie === "Ausstehend" ? (
                                <input type="radio" name="kategorie" id="ausstehend" value="Ausstehend" checked onClick={handleCategoryInput} />
                            ) :
                                <input type="radio" name="kategorie" id="ausstehend" value="Ausstehend" onClick={handleCategoryInput} />}
                            <label htmlFor="ausstehend">Ausstehend</label>

                            {aufgabe.kategorie === "Fertig" ? (
                                <input type="radio" name="kategorie" id="fertig" value="Fertig" checked onClick={handleCategoryInput} />
                            ) :
                                <input type="radio" name="kategorie" id="fertig" value="Fertig" onClick={handleCategoryInput} />}
                            <label htmlFor="fertig">Fertig</label>
                        </section>
                        <section>
                            {aufgabe.kategorie === "In Bearbeitung" ? (
                                <input type="radio" name="kategorie" id="bearbeitung" value="In Bearbeitung" checked onClick={handleCategoryInput} />
                            ) :
                                <input type="radio" name="kategorie" id="bearbeitung" value="In Bearbeitung" onClick={handleCategoryInput} />}
                            <label htmlFor="bearbeitung">In Bearbeitung</label>
                            <div><img src="/img/plus.png" alt="" /></div>
                        </section>
                    </section>
                </form>
            )}
            <ButtonAddUpd name="Update" />
            <Nav />
        </div>
    );
}

export default UpdateAufgabe;