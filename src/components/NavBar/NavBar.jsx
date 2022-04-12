import React from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={style.navBarContainer}>
            <div className={style.items}>
                <div className={style.link}>Eventos</div>
                <div className={style.link}>Contact</div>
                <div className={style.link}>Registrar</div>
                <button className={style.link}>Login</button>
            </div>
        </div>
    )
}

export default NavBar;