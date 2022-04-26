import React from "react";
import Kpis from "./Kpis";
import { useSelector } from "react-redux";
import useRoleProtected from "../Hooks/useRoleProtected";
import DataTable, {createTheme} from 'react-data-table-component';
import { Link } from "react-router-dom";
import Footer from '../footer/footer';

//css
import style from "./DashboardUser.module.css";
import 'style-components'

//assets
import logo from "../../assets/images/logotipo.png";
import imgSubida from "../../assets/images/subida.png"
import calen from "../../assets/images/calen.png"
import carrito from "../../assets/images/carrito.png"
import {ImEye} from "react-icons/im";

//Datos mokeados

const data = [
    {orderId:1, idEvent:1, eventName:"Roko fest", tickets: 2, datePurchase:"24-04-2022" },
    {orderId:2, idEvent:2, eventName:"Otro evento", tickets: 2, datePurchase:"18-04-2022" },
    {orderId:3, idEvent:3, eventName:"Recital", tickets: 2, datePurchase:"05-04-2022" },
    {orderId:4, idEvent:4, eventName:"Gran concierto", tickets: 2, datePurchase:"24-02-2022" },
    {orderId:5, idEvent:5, eventName:"Uno mas para estar bien seguros", tickets: 2, datePurchase:"16-02-2022" },
    {orderId:1, idEvent:1, eventName:"Roko fest", tickets: 2, datePurchase:"24-04-2022" },
    {orderId:2, idEvent:2, eventName:"Otro evento", tickets: 2, datePurchase:"18-04-2022" },
    {orderId:3, idEvent:3, eventName:"Recital", tickets: 2, datePurchase:"05-04-2022" },
    {orderId:4, idEvent:4, eventName:"Gran concierto", tickets: 2, datePurchase:"24-02-2022" },
    {orderId:5, idEvent:5, eventName:"Uno mas para estar bien seguros", tickets: 2, datePurchase:"16-02-2022" },
    {orderId:1, idEvent:1, eventName:"Roko fest", tickets: 2, datePurchase:"24-04-2022" },
    {orderId:2, idEvent:2, eventName:"Otro evento", tickets: 2, datePurchase:"18-04-2022" },
    {orderId:3, idEvent:3, eventName:"Recital", tickets: 2, datePurchase:"05-04-2022" },
    {orderId:4, idEvent:4, eventName:"Gran concierto", tickets: 2, datePurchase:"24-02-2022" },
    {orderId:5, idEvent:5, eventName:"Uno mas para estar bien seguros", tickets: 2, datePurchase:"16-02-2022" },
]

const columns = [
    
    {name:"Folio", selector: row => row.orderId, center: true,},
    {name:"Evento", selector: row => row.eventName, left: true,},
    {name:"Tickets", selector: row => row.tickets, center: true,},
    {name:"Date of purchase", selector: row => row.datePurchase, sortable: true, reorder: true,},
    {name: 'See Tickets', grow: 0, cell: row => <Link to='/'><ImEye className={style.icons}/></Link>, center: true, },
  
]

createTheme('custom', {
    text: {
      primary: '#242565',
      secondary: '#F5167E',
    },
    background: {
      default: '#fff',
    },
   
  });

export default function ShoppyngHistory() {
  useRoleProtected('user');
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  return (
    <div className={style.conteiner}>
      <div className={style.header}>
        <Link to='/'><img className={style.imgHeader} src={logo} /></Link>
        <div className={style.user}>
          <h5>
            Current User:{" "}
            {user.firstName ? user.firstName : "Usuario no logeado"}
          </h5>
        </div>
      </div>
      <div className={style.ContentsubTitle}>
        <h1 className={style.subtile}>Shoppyng History</h1>
      </div>
      {/* Kpis */}
      <div className={style.cardConteiner}>
        <Kpis
          title="Total Events Acquired"
          analitics="4"
          //   estadistics="+3.4"
          img={imgSubida}
        />
        <Kpis
          title="Total Tickets Purchased"
          analitics="12"
          //   estadistics="-5,5%"
          img={calen}
        />
        <Kpis title="Amount of Purchases" analitics="$10,524" img={carrito} />
        {/* <button className={style.btnPublish}>Publish Event</button> */}
      </div>
      <div className={style.ContentsubTitle}>
        <h1 className={style.subtile}>Recent Purchases</h1>
      </div>

      {/* EN ESTA TABLA SE VA A RENDERIZAR UNA FILA POR CADA EVENTO QUE TENGA EL VENDEDOR */}
      <div className={style.contendedorTabla}>
        <div className={style.tabla}>
          <DataTable  pagination columns={columns} data={data} theme="custom"  />
        </div>
      </div>
      <Footer/>
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