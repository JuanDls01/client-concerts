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
  table,
} from './DashboardAdmin.module.css'

const DashboardAdmin = ({children}) => {
  useRoleProtected(['super admin', 'admin']);
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.usersList);

  // console.log(users[1].Role.name)
  let totUsers = users.length?users.length-1:0
  let vendors = users.length? users.filter(user => user.Role.name == "Vendedor").length :'...'
  let customers = users.length? users.filter(user => user.Role.name == "User").length :'...'

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
          title="Total App Users"
          analitics={totUsers}
          estadistics="100%"
          img={imgSubida}
        />
        <CardAnalitics
          title="Total Active Sellers"
          analitics={vendors}
          // estadistics={vendors/totUsers}
          estadistics={new Intl.NumberFormat('en-US', { style: 'percent'}).format(vendors/totUsers)}
          img={calen}
        />
        <CardAnalitics 
        title="Total customers" 
        analitics={customers} 
        estadistics={new Intl.NumberFormat('en-US', { style: 'percent'}).format(customers/totUsers)}
        img={carrito} />
        <button className={btnPublish}>Publish Event</button>
      </div>

      <Users className={table}/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default DashboardAdmin;
