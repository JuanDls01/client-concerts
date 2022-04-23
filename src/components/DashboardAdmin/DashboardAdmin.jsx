import React, { useState } from "react";
import style from "./DashboardAdmin.module.css";
import logo from "../../assets/images/logotipo.png";
import CardAnalitics from "./CardAnalitics";
import imgSubida from "../../assets/images/subida.png"
import calen from "../../assets/images/calen.png"
import carrito from "../../assets/images/carrito.png"
import { useSelector } from "react-redux";
import useRoleProtected from "../Hooks/useRoleProtected";
import Tab from "./Tab/Tab";
import Users from "./Users/Users";
import { Link } from "react-router-dom";

export default function DashboardAdmin() {
  useRoleProtected('super admin');
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const [tab, setTab] = useState('users');

  const onTabChange = tab => {
    setTab(tab);
  }

  return (
    <div className={style.conteiner}>
      <div className={style.header}>
        <Link to='/'>
          <img className={style.imgHeader} src={logo} />
        </Link>
        <div className={style.user}>
          {/* <img src={user}/> */}
          {/* ACA IRIA EL NOMBRE DE USUARIO */}
          <h5><a href="#" onClick={()=> onTabChange('users')}>Users</a></h5>
          <h5><a href="#" onClick={()=> onTabChange('roles')}>Roles</a></h5>
          <h5>{user.firstName ? user.firstName : "Usuario no logeado"}</h5> 
        </div>
      </div>
      <div className={style.ContentsubTitle}>
        <h1 className={style.subtile}>Analytics</h1>  
      </div>

      {/* {ANALITICS} */}
      <div className={style.cardConteiner}>
          {/* ACA EN ANALITICS Y ESTADISTICAS PASARLE EL PARAMETRO */}
        <CardAnalitics
          title="Total Revenue"
          analitics="$52.63k"
          estadistics="+3.4"
          img={imgSubida}
        />
        <CardAnalitics
          title="Today Revenue"
          analitics="$1024"
          estadistics="-5,5%"
          img={calen}
        />
        <CardAnalitics title="Tickets Sold" analitics="$1024" img={carrito} />
        <button className={style.btnPublish}>Publish Event</button>
      </div>

      {tab === 'users' ? <Users /> : null}
      {tab === 'roles' ? <Tab title={'Roles'} /> : null}
    </div>
  );
}
