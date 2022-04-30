import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { useCookies } from "react-cookie";
import logo from "../../../assets/images/logotipo.png";
import actionsCreator from "../../../redux/actions";
import {
  header,
  imgHeader,
  userTitle,
  menuContainner,
  menuUserStyle,
  dropdownMenu,
  menuItem,
  fakeLink,
} from "./NavbarDash.module.css";

const NavBarDash = ({ user }) => {
  const dispatch = useDispatch();
  const { logout } = actionsCreator;
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const [menuUser, setMenuUser] = useState(false);
  const openMenuUser = () => {
    setMenuUser(!menuUser);
  };

  const logoutHandler = () => {
    removeCookie("token", { path: "/" });
    dispatch(logout());
  };

  return (
    <div className={header}>
      <Link to="/">
        <img className={imgHeader} src={logo} />
      </Link>
      <div className={userTitle}>
        {/* <img src={user}/> */}
        {/* ACA IRIA EL NOMBRE DE USUARIO */}
        <div className={menuContainner}>
          <a onClick={openMenuUser} className={menuUserStyle}>
            <AiOutlineUser />
            <p>{user.firstName ? user.firstName : "Usuario no logeado"}</p>
          </a>
          {menuUser && (
            <div className={dropdownMenu}>
              <Link to="/admin/dashboard" className={menuItem}>
                Users
              </Link>
              <Link to="/admin/dashboard/events" className={menuItem}>
                Events
              </Link>
              <hr className="text-danger" />
              <Link to="/profile" className={menuItem}>
                My Profile
              </Link>
              <Link to="/shopping" className={menuItem}>
                My Shopping
              </Link>
              <a className={menuItem + " " + fakeLink} onClick={logoutHandler}>
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarDash;
