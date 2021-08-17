import ButtonAdd from "./ButtonAdd";
import Nav from "./Nav";
import '../css/AddAufgabe.css'

const AddAufgabe = () => {
    return (
        <div className="addAufgabe">
            <ButtonAdd name="Erstellen" />
            <Nav />
        </div>

    );
}

export default AddAufgabe;