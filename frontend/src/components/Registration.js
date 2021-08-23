import LoginHeader from "./LoginHeader"
import '../css/Registration.css'

const Registration = () => {
    return (
        <div className="registration">
            <LoginHeader />
            <form action="">
                <input type="text" name="" placeholder="Email" />
                <input type="password" name="" placeholder="Passwort" />
                <input type="password" name="" placeholder="Passwort bestätigen" />
                <input type="button" value="Account erstellen" />
            </form>
        </div>
    );
}

export default Registration;