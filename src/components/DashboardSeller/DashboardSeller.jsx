import React, { useEffect } from "react";
import style from "./DashboardSeller.module.css";
import logo from "../../assets/images/logotipo.png";
import CardAnalitics from "./CardAnalitics";
import imgSubida from "../../assets/images/subida.png";
import calen from "../../assets/images/calen.png";
import carrito from "../../assets/images/carrito.png";
import { useSelector } from "react-redux";
import useRoleProtected from "../Hooks/useRoleProtected";
import actionsCreator from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { FaUserCircle } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";

export default function DashboardSeller() {
  const { getUser } = actionsCreator;
  useRoleProtected("vendedor");

  const user = useSelector((state) => state.user);

  const userdetail = useSelector((state) => state.userDetail);

  // para alimentar las cards

  //Total Revenue

  let revenues = userdetail.Events?.map((event) => {
    let total = event.Tickets.map((ticket) => ticket.price);
    return total;
  });
  revenues = revenues?.flat();

  const tot = 0;
  const totalRevenues = revenues?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    tot
  );

  //Today revenue

  //necesito el array de Eventos del vendedor
  let arrEvents = userdetail.Events?.map((event) => event.id); // [5,4]
  //Filtro los que no le corresponden de Orders

  //para obtener la fecha de hoy "fecha"  2022-05-02
  let date = new Date();
  let day = `${date.getDate()}`.padStart(2, "0");
  let month = `${date.getMonth() + 1}`.padStart(2, "0");
  let year = date.getFullYear();
  let fecha = `${year}-${month}-${day}`;

  let arrOrders = userdetail.Orders?.filter((order) => order.date == fecha); //filtro por fecha de compra de hoy

  let obtenerTicketsDia = arrOrders?.map((order) => {
    return order.Tickets.map((ticket) => ticket.id);
  });
  obtenerTicketsDia = obtenerTicketsDia?.flat();

  let revenueDay = userdetail.Events?.map((event) => {
    let total = event.Tickets.map((ticket) => {
      if (obtenerTicketsDia.indexOf(ticket.id) >= 0) {
        return ticket.price;
      }
    });
    return total;
  });
  revenueDay = revenueDay?.flat();

  const tota = 0;
  let totalRevenuesToday = revenueDay?.reduce(
    (previousValue, currentValue) =>
      parseInt(previousValue) + parseInt(currentValue),
    tota
  );
  if (isNaN(totalRevenuesToday)) totalRevenuesToday = 0;

  //Tickets Sold
  let tickets = userdetail.Events?.map((event) => event.Tickets.length);
  const totTickets = 0;
  const totalTickets = tickets?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    totTickets
  );

  // fin

  const id = user.id;

  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getUser(id, token));
  }, [token]);

  const columns = [
    {
      name: "Event Name",
      selector: (row) => row.eventName,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "stage",
      selector: (row) => row.stage,
      sortable: true,
    },
    {
      name: "ticket Sells",
      selector: (row) => row.ticketsels,
      sortable: true,
    },
  ];

  const data =
    userdetail.Events &&
    userdetail.Events.map((e) => {
      return {
        eventName: e.name,
        date: e.date,
        stage: e.Stage.name,
        ticketsels: e.Tickets.length,
      };
    });

  return (
    <div className={style.conteiner}>
      {/* <div className={style.header}>
      <Link to='/'><img className={style.imgHeader} src={logo} /></Link>
        <div className={style.user}>
          <FaUserCircle  className={style.iconoUser}/>
          <h5>{user.firstName ? user.firstName : "Usuario no logeado"}</h5>
        </div>
      </div> */}
      {/* <img src={user}/> */}
      {/* ACA IRIA EL NOMBRE DE USUARIO */}
      <NavBar />
      <div className={style.ContentsubTitle}>
        <h1 className={style.subtile}>Analytics</h1>
      </div>
      {/* {PRIMER CARD} */}
      <div className={style.cardConteiner}>
        {/* ACA EN ANALITICS Y ESTADISTICAS PASARLE EL PARAMETRO */}
        <CardAnalitics
          title="Total Revenue"
          // analitics="$52.63k"
          estadistics="+3.4"
          analitics={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(totalRevenues)}
          img={imgSubida}
        />
        <CardAnalitics
          //totalRevenuesToday
          title="Today Revenue"
          analitics={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(totalRevenuesToday)}
          estadistics="-5,5%"
          img={calen}
        />
        <CardAnalitics
          title="Tickets Sold"
          analitics={totalTickets}
          estadistics=" "
          img={carrito}
        />
        <Link to="/createEvent">
          <button className={style.btnPublish}>Publish Event</button>
        </Link>
      </div>
      <div className={style.ContentsubTitle}>
        <h1 className={style.subtile}>Recent Events</h1>
      </div>

      {/* EN ESTA TABLA SE VA A RENDERIZAR UNA FILA POR CADA EVENTO QUE TENGA EL VENDEDOR */}
      <div className={style.tableCont}>
        <div className={style.tabla}>
          <DataTable columns={columns} data={data} highlightOnHover={true} />
        </div>
      </div>
    </div>
  );
}
