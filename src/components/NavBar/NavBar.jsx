import React from 'react';
import { Link } from "react-router-dom";

import s from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={s.navbarExterno}>
            <nav className={s.navegacion}>
                <ul>
                    <li>
                    <Link className={s.link} to="/">Events</Link>
                    </li>
                    <li>
                    <Link className={s.link} to="/">Contact</Link>
                    </li>
                    <li>
                    <Link className={s.link} to="/">Register</Link>
                    </li>
                </ul>

                <button className={s.button}>Login</button>

            </nav>
            
                
            
        
        </div>
    )
}

export default NavBar;