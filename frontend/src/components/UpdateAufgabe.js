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
    const [aufgabe, setAufgabe] = useState(null)
    let { id } = useParams()
    console.log(id)
    useEffect(() => {
        axios.get(`/api/aufgabe/${id}`)
            .then(result => setAufgabe(result.data))
            .catch((err) => console.log(err))
    })

    return (
        <div className="addAufgabe">
            <h1>Aufgabe bearbeiten</h1>
            {aufgabe && (
                <form >
                    <div className="flex">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={aufgabe.name} />
                    </div>
                    <div className="flex">
                        <label htmlFor="datum">Datum</label>
                        <DatePicker className="bg" value={aufgabe.datum} />
                    </div>
                    <section className="startEnde">
                        <div className="flex">
                            <label htmlFor="start">Start</label>
                            <TimePicker className="bgZeit" defaultValue={moment({ hour: aufgabe.start.substr(0, 2), minute: aufgabe.start.substr(3, 2) })} showSecond={false} minuteStep={15} />
                        </div>
                        <div className="flex">
                            <label htmlFor="ende">Ende</label>
                            <TimePicker defaultValue={moment({ hour: aufgabe.ende.substr(0, 2), minute: aufgabe.ende.substr(3, 2) })} showSecond={false} minuteStep={15} />
                        </div>
                    </section>
                    <div className="flex">
                        <label htmlFor="descript">Beschreibung</label>
                        <input type="text" name="beschreibung" id="descript" value={aufgabe.beschreibung} />
                    </div>
                    <section className="category">
                        <label>Kategorie</label>
                        <section>
                            {aufgabe.kategorie === "Ausstehend" ? (
                                <input type="radio" name="kategorie" id="ausstehend" value="Ausstehend" checked />
                            ) :
                                <input type="radio" name="kategorie" id="ausstehend" value="Ausstehend" />}
                            <label htmlFor="ausstehend">Ausstehend</label>

                            {aufgabe.kategorie === "Fertig" ? (
                                <input type="radio" name="kategorie" id="fertig" value="Fertig" checked />
                            ) :
                                <input type="radio" name="kategorie" id="fertig" value="Fertig" />}
                            <label htmlFor="fertig">Fertig</label>
                        </section>
                        <section>
                            {aufgabe.kategorie === "In Bearbeitung" ? (
                                <input type="radio" name="kategorie" id="bearbeitung" value="In Bearbeitung" checked />
                            ) :
                                <input type="radio" name="kategorie" id="bearbeitung" value="In Bearbeitung" />}
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