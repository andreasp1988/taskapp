import ButtonAddUpd from "./ButtonAddUpd";
import Nav from "./Nav"
import '../css/AddUpdAufgabe.css'

const UpdateAufgabe = () => {
    return (
        <div className="updateAufgabe">
            <ButtonAddUpd name="Update" />
            <Nav />
        </div>
    );
}

export default UpdateAufgabe;