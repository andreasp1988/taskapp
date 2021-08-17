import { Link } from "react-router-dom";
import ButtonEinlog from "./ButtonEinlog";
import '../css/Login.css'

const Login = () => {
    return (
        <div className="login">
            <section className="logo">
                <img src="/img/logo.png" alt="" />
            </section>
            <h2>Verwalte deine <br />Aufgaben einfacher</h2>
            <section className="flex">
                <ButtonEinlog name="Einloggen mit Google" />
                <ButtonEinlog name="Einloggen mit Email" />
                <Link to="/registation">Noch keinen Account? Hier registrieren.</Link>
            </section>

        </div>
    );
}

export default Login;