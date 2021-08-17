import ButtonAdd from "./ButtonAdd";
import Nav from "./Nav"
import '../css/UpdateAufgabe.css'

const UpdateAufgabe = () => {
    return (
        <div className="updateAufgabe">
            <ButtonAdd name="Update" />
            <Nav />
        </div>
    );
}

export default UpdateAufgabe;