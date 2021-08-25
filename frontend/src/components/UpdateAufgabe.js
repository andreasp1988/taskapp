import ButtonAddUpd from "./ButtonAddUpd";
import Nav from "./Nav"
import '../css/AddUpdAufgabe.css'

import axios from "axios"
import { useState } from "react";

const UpdateAufgabe = () => {
    const [aufgabe, setAufgabe] = useState(null)

    return (
        <div className="addAufgabe">
            <h1>Aufgabe bearbeiten</h1>
            <ButtonAddUpd name="Update" />
            <Nav />
        </div>
    );
}

export default UpdateAufgabe;