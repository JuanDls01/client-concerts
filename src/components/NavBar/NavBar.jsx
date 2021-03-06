import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import useLogOut from '../Hooks/useLogOut';
import actionsCreator from "../../redux/actions";
import { useCookies } from "react-cookie";
// import { AiOutlineUser } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
// import { AiFillHeart } from "react-icons/ai";
// import { BsCart2 } from "react-icons/bs";
import logo from "../../assets/images/logotipo.png";
import { HashLink } from 'react-router-hash-link';

import Login from "../Login/Login";
import RegisterForm from "../registerForm/RegisterForm";

import s from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userName = user.firstName;
  const token = useSelector((state) => state.token);
  const { logout } = actionsCreator;
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  // Username Drowdown Menu:
  const [menuUser, setMenuUser] = useState(false);
  const openMenuUser = () => {
    setMenuUser(!menuUser);
  };

  // Favorite Dropdown Menu:
  const [menuFav, setMenuFav] = useState(false);
  const openMenuFav = () => {
    setMenuFav(!menuFav);
  };

  // Login show Modal:
  // const [loginModal, setLoginModal] = useState(false);
  // const openLoginModal = () => { setLoginModal(true) };
  // const closeLoginModal = () => { setLoginModal(false) };

  // Register show Modal:
  // const [registerModal, setRegisterModal] = useState(false);
  // const openRegisterModal = () => { setRegisterModal(true) };
  // const closeRegisterModal = () => { setRegisterModal(false) };

  const logoutHandler = () => {
    removeCookie("token");
    dispatch(logout());
  };

  return (
    <nav className={token === "" ? s.navegacion : s.navegacionUser}>
      {token === "" ? (
        // Navbar invitado:
        <ul>
          <li>
            <HashLink to="/#UpcomingEvents" className={s.link}>Events</HashLink>
            {/* <a to="/" href="#UpcomingEvents" className={s.link} >
              Events
            </a> */}
          </li>
          <li>
            <Link to="/register" className={s.link}>
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className={s.button}>
              Login
            </Link>
          </li>
          {/* Esto es para cuando podamos hacerlo Modal: */}
          {/* <li><button className={s.link} onClick={openRegisterModal}>Register</button></li>
                        <li><button className={s.button} onClick={openLoginModal}>Login</button></li>
                        {
                            registerModal && <RegisterForm closeRegisterModal={closeRegisterModal} />
                        }
                        {
                            loginModal && <Login closeLoginModal={closeLoginModal} openRegisterModal={openRegisterModal} />
                        } */}
        </ul>
      ) : (
        // Navbar cliente:
        <div className={s.navUser}>
          <div className={s.logoContainner}>
          <Link to='/'><img src={logo} className={s.logo} alt={logo} /></Link>
          </div>
          <div className={s.menuContainner}>
            <a onClick={openMenuUser} className={s.menuUser}>
              <div className={s.containerlink}>
              <FaUserCircle  className={s.iconoUser}/>
              <p className={s.linkUser}>{userName}</p>
              </div>
            </a>
            {menuUser && (
              <div className={s.dropdownMenu}>
              <Link to="/" className={s.menuItem}>
                    Home
                  </Link>
                {user.Role.name.toLowerCase() === "admin" ||
                user.Role.name.toLowerCase() === "super admin" ? (
                  <Link to="/admin/dashboard" className={s.menuItem}>
                    Dashboard
                  </Link>
                ) : null}
                {user.Role.name.toLowerCase() === "vendedor" ? (
                  <Link to="/vendedor/dashboard" className={s.menuItem}>
                    Seller
                  </Link>
                ) : null}
                <Link to='/profile' className={s.menuItem}>
                  My Profile
                </Link>
                <Link
                  to={`/user/shoppinghistory/${user.id}`}
                  className={s.menuItem}
                >
                  My Shopping
                </Link>
                <a
                  className={s.menuItem + " " + s.fakeLink}
                  onClick={logoutHandler}
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
    // </div>
  );
};

export default NavBar;
