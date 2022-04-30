import React, { useEffect, useState } from "react";
import Kpis from "./Kpis";
import { useSelector, useDispatch } from "react-redux";
import getTickets from '../../redux/actions/getTickets'
// import ReactDom from 'react-dom';

import useRoleProtected from "../Hooks/useRoleProtected";
import DataTable, {createTheme} from 'react-data-table-component';
import Footer from '../footer/footer';
import { Link, useParams } from "react-router-dom";
import getUser from "../../redux/actions/getUser";
import clearUser from "../../redux/actions/clearUser";
import Modal from '../Modal/Modal';
import {Tickets} from './Tickets/Tickets'

//css
import style from "./DashboardUser.module.css";
import { FaUserCircle } from "react-icons/fa";
import "style-components";

//assets
// import { ImEye } from "react-icons/im";
import logo from "../../assets/images/logotipo.png";
import imgSubida from "../../assets/images/subida.png";
import calen from "../../assets/images/calen.png";
import carrito from "../../assets/images/carrito.png";

//Datos mokeados

// const data = [
//     {orderId:1, idEvent:1, eventName:"Roko fest", tickets: 2, datePurchase:"24-04-2022" },
//     {orderId:2, idEvent:2, eventName:"Otro evento", tickets: 2, datePurchase:"18-04-2022" },
//     {orderId:3, idEvent:3, eventName:"Recital", tickets: 2, datePurchase:"05-04-2022" },
//     {orderId:4, idEvent:4, eventName:"Gran concierto", tickets: 2, datePurchase:"24-02-2022" },
//     {orderId:5, idEvent:5, eventName:"Uno mas para estar bien seguros", tickets: 2, datePurchase:"16-02-2022" },
//     {orderId:1, idEvent:1, eventName:"Roko fest", tickets: 2, datePurchase:"24-04-2022" },
//     {orderId:2, idEvent:2, eventName:"Otro evento", tickets: 2, datePurchase:"18-04-2022" },
//     {orderId:3, idEvent:3, eventName:"Recital", tickets: 2, datePurchase:"05-04-2022" },
//     {orderId:4, idEvent:4, eventName:"Gran concierto", tickets: 2, datePurchase:"24-02-2022" },
//     {orderId:5, idEvent:5, eventName:"Uno mas para estar bien seguros", tickets: 2, datePurchase:"16-02-2022" },
//     {orderId:1, idEvent:1, eventName:"Roko fest", tickets: 2, datePurchase:"24-04-2022" },
//     {orderId:2, idEvent:2, eventName:"Otro evento", tickets: 2, datePurchase:"18-04-2022" },
//     {orderId:3, idEvent:3, eventName:"Recital", tickets: 2, datePurchase:"05-04-2022" },
//     {orderId:4, idEvent:4, eventName:"Gran concierto", tickets: 2, datePurchase:"24-02-2022" },
//     {orderId:5, idEvent:5, eventName:"Uno mas para estar bien seguros", tickets: 2, datePurchase:"16-02-2022" },
// ]
  
export default function ShoppyngHistory() {
  useRoleProtected(["user", "vendedor"]);
  
  const { id } = useParams();
  const user = useSelector((state) => state.userDetail);
  const token = useSelector((state) => state.token);
  const [mostrarPanel, setMostrarPanel] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id, token));
    return () => {
      dispatch(clearUser());
    };
  }, [token]);

  const data = user.Orders;

  const res = []
  user.Orders?.forEach((order) =>{res.push(order.Tickets)})
  
  let prices = user.Orders?.map((order) => order.Tickets);
  let amount = 0;
  prices?.forEach((price) => {
    price.forEach((item) => {
      amount = amount + item.price;
    });
  });
  // console.log(amount)
  // console.log(user.Orders?.length)
  
  const columns = [
    { name: "Folio", selector: (row) => row.id, center: true },
    { name: "Evento", selector: (row) => row.Tickets[0].Event.name, left: true },
    { name: "Tickets", selector: (row) => row.Tickets.length, center: true },
    { name: "Date of purchase", selector: (row) => row.date, sortable: true, reorder: true,  },
    { name: "See Tickets", grow: 0, cell: (row) => "View 👁︎ ", center: true,   },
  ];

  // console.log(mostrarPanel)

  //Seleccion de renglon
  function handleRowClicked(e){
      setMostrarPanel(!mostrarPanel)
      dispatch(getTickets(e));
  };

  //Estilos fondo tabla
  createTheme("custom", {
    text: {
      primary: "#242565",
      secondary: "#F5167E",
    },
    background: {
      default: "#fff",
    },
  });


  return (
    
    <div className={style.conteiner}>
    
      <div className={style.header}>
        <Link to='/'><img className={style.imgHeader} src={logo} /></Link>
        <div className={style.user}>
        <FaUserCircle  className={style.iconoUser}/>
          <h5>
          {" "}
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
          title="Total Orders Acquired"
          analitics={user.Orders?.length}
          //   estadistics="+3.4"
          img={imgSubida}
        />
        <Kpis
          title="Total Tickets Purchased"
          analitics={res.flat().length}
          //   estadistics="-5,5%"
          img={calen}
        />
        <Kpis title="Amount of Purchases" analitics={new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(amount)} img={carrito} />
      </div>
      <div className={style.ContentsubTitle}>
        <h1 className={style.subtile}>Recent Purchases</h1>
      </div>
      {mostrarPanel && <Modal><div className={style.divIn}><Tickets onClose={handleRowClicked}/></div></Modal>}

      {/* EN ESTA TABLA SE VA A RENDERIZAR UNA FILA POR CADA EVENTO QUE TENGA EL USUARIO */}
      <div className={style.contendedorTabla}>
        <div className={style.tabla}>
          <DataTable  pagination columns={columns} data={data}  theme="custom" onRowClicked={(e)=>{ handleRowClicked(e) }} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}










     {/* {mostrarPanel && ReactDom.createPortal(<div  className={style.divIn} >Esto es lo que necesito</div>, document.getElementById('portal') )} */}



