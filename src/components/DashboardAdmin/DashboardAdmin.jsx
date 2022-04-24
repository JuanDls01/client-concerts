import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardAnalitics from "./CardAnalitics";
import imgSubida from "../../assets/images/subida.png"
import calen from "../../assets/images/calen.png"
import carrito from "../../assets/images/carrito.png"
import Users from "./Users/Users";
import NavBarDash from "./NavBarDash/NavBarDash";
import useRoleProtected from "../Hooks/useRoleProtected";
import {
  conteiner,
  ContentsubTitle,
  subtile,
  cardConteiner,
  btnPublish,
} from './DashboardAdmin.module.css'

const DashboardAdmin = ({children}) => {
  useRoleProtected(['super admin', 'admin']);
  const user = useSelector((state) => state.user);

  return (
    <div className={conteiner}>
      <NavBarDash user={user} />
      
      <div className={ContentsubTitle}>
        <h1 className={subtile}>Analytics</h1>  
      </div>

      {/* {ANALITICS} */}
      <div className={cardConteiner}>
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
        <button className={btnPublish}>Publish Event</button>
      </div>

      <Users />
    </div>
  );
}

export default DashboardAdmin;
