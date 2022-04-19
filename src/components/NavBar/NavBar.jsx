import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import actionsCreator from '../../redux/actions';
import { useCookies } from "react-cookie";

import s from './NavBar.module.css';

const NavBar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const { logout, loginToken } = actionsCreator;
    const [ cookies, setCookie, removeCookie ] = useCookies(['token']);

    useEffect(() => {
        if (cookies.token) dispatch(loginToken({ bodyToken: cookies.token }));
    }, []);

    const logoutHandler = () => {
        removeCookie('token');
        dispatch(logout());
    }

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
                    { token === '' ? <li><Link className={s.link} to="/register">Register</Link></li>: null }
                    { 
                        token === '' ?
                        <li><Link className={s.button} to="/login">Login</Link></li> :
                        <li><span className={s.link + ' ' + s.fakeLink} onClick={logoutHandler}>Logout</span></li>
                    }
                    
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;