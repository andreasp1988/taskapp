import ButtonAddUpd from "./ButtonAddUpd";
import Nav from "./Nav";
import '../css/AddUpdAufgabe.css'

const AddAufgabe = () => {
    return (
        <div className="addAufgabe">
            <ButtonAddUpd name="Erstellen" />
            <Nav />
        </div>

    );
}

export default AddAufgabe;