import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import actionsCreator from '../../redux/actions';
import { useCookies } from "react-cookie";
import { AiOutlineUser } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import logo from '../../assets/images/logotipo.png';

import s from './NavBar.module.css';

const NavBar = () => {
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const { logout, loginToken } = actionsCreator;
    const [ cookies, setCookie, removeCookie ] = useCookies(['token']);

    useEffect(() => {
        if (cookies.token) dispatch(loginToken({ bodyToken: cookies.token }));
    }, [dispatch,loginToken,cookies.token]);

    const logoutHandler = () => {
        removeCookie('token');
        dispatch(logout());
    }

    return (
            <nav className={token === ''? s.navegacion: s.navegacionUser}>
                {
                    token === ''?
                    null:
                    <div className={s.logoContainner}>
                        <img src={logo} className={s.logo} alt={logo}/>
                    </div>
                }
                {/* <div className={s.ulContainner}> */}
                    <ul>
                        { 
                            token === ''? 
                            <li><a href="#UpcomingEvents" className={s.link} to="/">Events</a></li>:
                            <li>
                                <a href="/#"><AiOutlineUser/>Username</a>
                                <ul>
                                    <li><a href='/#'>My Profile</a></li>
                                    <li><span className={s.link + ' ' + s.fakeLink} onClick={logoutHandler}>Logout</span></li>
                                </ul>
                            </li>
                        }
                        { 
                            token === ''?
                            <li><Link className={s.link} to="/contact">Contact</Link></li>:
                            <li><Link className={s.link} to="/myshopping">My Shopping</Link></li>
                        }
                        { 
                            token === ''?
                            <li><Link className={s.link} to="/register">Register</Link></li>: 
                            <li>
                                <a href='/#'><AiFillHeart/>Favorites</a>
                                <ul>
                                    <li><a href='/#'>Favorite1</a></li>
                                    <li><a href='/#'>Favorite2</a></li>
                                </ul>
                            </li>
                        }
                        
                        { 
                            token === ''?
                            <li><Link className={s.button} to="/login">Login</Link></li> :
                            <Link to='/cart'><BsCart2 /></Link>
                        }
                        
                    </ul>
            </nav>
        // </div>
    )
}

export default NavBar;