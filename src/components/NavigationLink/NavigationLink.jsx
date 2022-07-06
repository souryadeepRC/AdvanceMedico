import { NavLink } from "react-router-dom"
import classes from "./NavigationLink.module.css";

const NavigationLink = () => {
    return (
        <nav className={classes.header__navigation}>
            <ul>
                <li><NavLink activeClassName={classes.selected__link} exact to="/home">Home</NavLink></li>
                <li><NavLink activeClassName={classes.selected__link} to="/book-appointment">Add Appointment</NavLink></li>
                <li><NavLink activeClassName={classes.selected__link} to="/bookings">Appointments</NavLink></li>
                <li><NavLink activeClassName={classes.selected__link} to="/user">User</NavLink></li>
            </ul>

        </nav>
    )
}
export default NavigationLink