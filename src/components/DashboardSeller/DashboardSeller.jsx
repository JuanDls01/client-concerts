import React from "react";
import style from "./DashboardSeller.module.css";
import logo from "../../assets/images/logotipo.png";
import CardAnalitics from "./CardAnalitics";
import imgSubida from "../../assets/images/subida.png"
import calen from "../../assets/images/calen.png"
import carrito from "../../assets/images/carrito.png"

export default function DashboardSeller() {


  return (
    <div className={style.conteiner}>
      <div className={style.header}>
        <img className={style.imgHeader} src={logo} />
        <div className={style.user}>
          {/* <img src={user}/> */}
          {/* ACA IRIA EL NOMBRE DE USUARIO */}
          <h5>Nicopalomares</h5> 
        </div>
      </div>
      <div className={style.ContentsubTitle}>
        <h1 className={style.subtile}>Analytics</h1>
        
      </div>
      {/* {PRIMER CARD} */}
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
      <div className={style.ContentsubTitle}>
        <h1 className={style.subtile}>Recent Events</h1>
      </div>

      {/* EN ESTA TABLA SE VA A RENDERIZAR UNA FILA POR CADA EVENTO QUE TENGA EL VENDEDOR */}
      <div className={style.tabla}>
        <table>
          <tr className={style.columns}>
            <th>Event Name</th>
            <th>Category</th>
            <th>Stage</th>
            <th>Ticket Sells</th>
            <th>Total Sells</th>
          </tr>
          {/* AQUI VAN A IR LOS DATOS DE CADA EVENTO  */}
          <tr>
            <td>Metalica</td>
            <td>1</td>
            <td>Luna Park</td>
            <td>36</td>
            <td>$3650</td>
          </tr>
        </table>
      </div>
    </div>
  );
}