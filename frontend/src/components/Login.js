import { Link } from "react-router-dom";
import ButtonEinlog from "./ButtonEinlog";
import '../css/Login.css'
import LoginHeader from "./LoginHeader";

const Login = () => {
    return (
        <div className="login">
            <LoginHeader />
            <section className="flex">
                <ButtonEinlog name="Einloggen mit Google" />
                <ButtonEinlog name="Einloggen mit Email" />
                <Link to="/registration">Noch keinen Account? Hier registrieren.</Link>
            </section>

        </div>
    );
}

export default Login;