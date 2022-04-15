import React from 'react';
import { Link } from "react-router-dom";

import s from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={s.navbarExterno}>
            <nav className={s.navegacion}>
                <ul>
                    <li>
                    <a href="#UpcomingEvents" className={s.link} to="/">Events</a>
                    </li>
                    <li>
                    <Link className={s.link} to="/contact">Contact</Link>
                    </li>
                    <li>
                    <Link className={s.link} to="/register">Register</Link>
                    </li>
                </ul>

                    <li className={s.button}><Link className={s.link} to="/login">Login</Link></li>

            </nav>
            
                
            
        
        </div>
    )
}

export default NavBar;