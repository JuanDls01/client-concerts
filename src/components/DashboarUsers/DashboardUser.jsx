import React from "react";
import Kpis from "./Kpis";
import { useSelector } from "react-redux";
import useRoleProtected from "../Hooks/useRoleProtected";
import DataTable from 'react-data-table-component';
//css
import style from "./DashboardUser.module.css";
//assets
import logo from "../../assets/images/logotipo.png";
import imgSubida from "../../assets/images/subida.png"
import calen from "../../assets/images/calen.png"
import carrito from "../../assets/images/carrito.png"

const data = [
    {orderId:1, idEvent:1, eventName:"Roko fest", tickets: 2, datePurchase:"24-04-2022" }
]

const columns = [
    {name:"Folio", selector: row => row.orderId},
    {name:"Evento", selector: row => row.eventName},
    {name:"Tickets", selector: row => row.tickets},
    {name:"Date of purchase", selector: row => row.datePurchase},
]

export default function ShoppyngHistory() {
  // useRoleProtected('user');
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  return (
    <div className={style.conteiner}>
      <div className={style.header}>
        <img className={style.imgHeader} src={logo} />
        <div className={style.user}>
          <h5>Current User:  {user.firstName ? user.firstName : "Usuario no logeado"}</h5> 
        </div>
      </div>
      <div className={style.ContentsubTitle}>
        <h1 className={style.subtile}>Shoppyng History</h1>
        
      </div>
      {/* {PRIMER CARD} */}
      <div className={style.cardConteiner}>
          {/* ACA EN ANALITICS Y ESTADISTICAS PASARLE EL PARAMETRO */}
        <Kpis
        //   title="Total Revenue"
        //   analitics="$52.63k"
        //   estadistics="+3.4"
          img={imgSubida}
        />
        <Kpis
        //   title="Today Revenue"
        //   analitics="$1024"
        //   estadistics="-5,5%"
          img={calen}
        />
        <Kpis 
        // title="Tickets Sold"
        //  analitics="$1024" 
         img={carrito} />
        <button className={style.btnPublish}>Publish Event</button>
      </div>
      <div className={style.ContentsubTitle}>
        <h1 className={style.subtile}>Recent Events</h1>
      </div>

      {/* EN ESTA TABLA SE VA A RENDERIZAR UNA FILA POR CADA EVENTO QUE TENGA EL VENDEDOR */}
        <DataTable
            columns={columns}
            data={data}
        />

    </div>
  );
}



{/* <div className={style.tabla}>
<table>
  <tr className={style.columns}>
    <th>Event Name</th>
    <th>Category</th>
    <th>Stage</th>
    <th>Ticket Sells</th>
    <th>Total Sells</th>
  </tr>
  <tr>
    <td>Metalica</td>
    <td>1</td>
    <td>Luna Park</td>
    <td>36</td>
    <td>$3650</td>
  </tr>
</table>
</div> */}