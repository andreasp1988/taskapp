import '../css/ButtonEinlog.css'

const ButtonEinlog = (props) => {
    return (
        <button className="buttonEinlog">
            {/* <p> {props.name}</p> */}
            <a href={props.link}>{props.name}</a>
            <img src="/img/pfeil.png" alt="" />
        </button>
    );
}

export default ButtonEinlog;