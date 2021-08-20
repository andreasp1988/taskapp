import ButtonAddUpd from "./ButtonAddUpd";
import Nav from "./Nav";
import '../css/AddUpdAufgabe.css'

import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddAufgabe = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="addAufgabe">
                <h1>Aufgabe hinzufügen</h1>

                <form action="">
                    <div className="flex">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="" id="name" placeholder="Kleiderschrank ausmisten" />
                    </div>
                    <div className="flex">
                        <label htmlFor="datum">Datum</label>
                        {/* <input type="text" name="" id="datum" placeholder="27.08.2021" /> */}
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <section className="startEnde">
                        <div className="flex">
                            <label htmlFor="start">Start</label>
                            <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />
                        </div>
                        <div className="flex">
                            <label htmlFor="ende">Ende</label>
                            <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />
                        </div>
                    </section>
                    <div className="flex">
                        <label htmlFor="descript">Beschreibung</label>
                        <input type="text" name="" id="descript" placeholder="Beschreibung der Tätigkeit" />
                    </div>
                    <section className="category">
                        <label>Kategorie</label>
                        <section>
                            <button>Ausstehend</button>
                            <button>Fertig</button>
                        </section><section>
                            <button>In Bearbeitung</button>
                            <button><img src="/img/plus.png" alt="" /></button>
                        </section>
                    </section>


                </form>
            </div>
            <ButtonAddUpd name="Erstellen" />
            <Nav />
        </>

    );
}

export default AddAufgabe;