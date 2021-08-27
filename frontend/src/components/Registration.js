import LoginHeader from "./LoginHeader"
import '../css/Registration.css'
import axios from 'axios';
import { useState } from "react";




const Registration = () => {
    const [inputs, setInputs] = useState({ email: "", password: "", password_True: "" })

    const handleInputs = (event) => {
        setInputs(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    const saveUser = (e) => {
        e.preventDefault()
        axios.post('/api', inputs)
            .then(result => {
                console.log(result)
                window.location.href = result.data.redirect
            })
            .catch(err => console.log(err))
    }

    return (

        <div className="registration">
            <LoginHeader />
            <form>
                <input type="text" name="email" placeholder="Email" value={inputs.email} onChange={handleInputs} />
                <input type="password" name="password" placeholder="Passwort" value={inputs.password} onChange={handleInputs} />
                <input type="password" name="password_True" placeholder="Passwort bestätigen" value={inputs.password_True} onChange={handleInputs} />
                <button onClick={saveUser} >Jetzt Registrieren</button>
            </form>
        </div>
    );
}























export default Registration;
