import '../css/ButtonAdd.css'

const ButtonAdd = (props) => {
    return (
        <button className="buttonAdd">{props.name}</button>
    );
}

export default ButtonAdd;