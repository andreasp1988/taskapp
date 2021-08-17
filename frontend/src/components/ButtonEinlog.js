import '../css/ButtonEinlog.css'

const ButtonEinlog = (props) => {
    return (
        <button className="buttonEinlog">
            <p> {props.name}</p>
            <img src="/img/pfeil.png" alt="" />
        </button>
    );
}

export default ButtonEinlog;