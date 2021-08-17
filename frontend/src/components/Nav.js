import { NavLink } from "react-router-dom";
import '../css/Nav.css'


const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home" activeClassName="selected">
                        <img src="/img/dashboard.svg" alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/addAufgabe">
                        <img src="/img/add.svg" alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/kalender" activeClassName="selected">
                        <img src="/img/kalender.svg" alt="" />
                    </NavLink>
                </li>
            </ul>
        </nav >
    );
}

export default Nav;