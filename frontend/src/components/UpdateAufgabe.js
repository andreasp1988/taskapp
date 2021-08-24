import ButtonAddUpd from "./ButtonAddUpd";
import Nav from "./Nav"
import '../css/AddUpdAufgabe.css'

const UpdateAufgabe = () => {
    return (
        <div className="addAufgabe">
            <h1>Aufgabe bearbeiten</h1>
            <ButtonAddUpd name="Update" />
            <Nav />
        </div>
    );
}

export default UpdateAufgabe;