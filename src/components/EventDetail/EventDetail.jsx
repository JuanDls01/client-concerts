import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import style from "./EventDetail.module.css";
import actionsCreator from "../../redux/actions/index";
import MapContainer from "../MapContainer/MapContainer";
import determinarPrecio from "../../utils/determinarPrecio";
import savePreference from "../../redux/actions/savePreference";
import savePreOrder from "../../redux/actions/savePreOrder";
// import logo from "../../assets/images/logotipo.png"
import { animateScroll as scroll} from 'react-scroll';
import Swal from 'sweetalert2/dist/sweetalert2.js'
// import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// let numbers = [0,1,2,3,4,5];

// const formatPrice = new Intl.NumberFormat("es-AR", {
//   style: "currency",
//   currency: "USD",
// });
// const formatNumber = new Intl.NumberFormat("es-AR");

const getShortMonthName = (date) => {
  return monthNames[date.getMonth()].substring(0, 3);
};

const EventDetail = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { getEventDetail, cleanEventDetail } = actionsCreator;

  useEffect(() => {
    dispatch(getEventDetail(id));
    scroll.scrollToTop();
    return () => {
      dispatch(cleanEventDetail());
     };
  }, [dispatch, id, cleanEventDetail, getEventDetail]);

  const token = useSelector((state) => state.token);
  const event = useSelector((state) => state.details);
  const [numbers, setNumbers] = useState(['']);
  const stockTotal = event.stock && event.stock.cat1stock + event.stock.cat2stock + event.stock.cat3stock;
  const arrayNumbers = (cat) => {
    let number = [];
    let stock = event.stock && event.stock[`${cat}`];
    // console.log(stock)
    if (stock >= 5) {
      number = [0,1,2,3,4,5];
    } else {
      for (let i = 0; i <= stock; i++) {
        number.push(i);
      }
    }
    return number;
  }

  const [purchase, setPurchase] = useState({
    userId: user.id,
    ticketCategory: null,
    ticketName: null,
    ticketQ: 0,
    ticketPrice: null,
  });

  const handleChange = (e) => {
    setNumbers(arrayNumbers((e.target.value).replace('name', 'stock')))
    const price = determinarPrecio(e.target.value);
    const property = e.target.name;
    const value = e.target.value;
    setPurchase({
      ...purchase,
      [property]: value,
      ticketName: event.stock[value],
      ticketPrice: event.stock[price],
    });
  };

  const handleQChange = (e) => {
    setPurchase({ ...purchase, ticketQ: e.target.value });
  };

  const handleBuy = async (e) => {
    const preference = {
      customer: user.id,
      total: parseInt(purchase.ticketPrice) * parseInt(purchase.ticketQ),
      items: [
        {
          sku: 123,
          name: `${event.name} - ${purchase.ticketName}`,
          price: parseInt(purchase.ticketPrice),
          quantity: parseInt(purchase.ticketQ),
          currency: "USD",
        },
      ],
    };
    if (token !== '') {
      if ( purchase.ticketCategory !== null && purchase.ticketCategory !== "" && purchase.ticketQ !== "" && purchase.ticketQ !== 0) {
        dispatch(savePreference(preference));
        const preOrder = {
          eventId: event.id,
          userId: user.id,
          eventName: event.name,
          eventDate: event.date,
          eventTime: event.time,
          ticketName: purchase.ticketName,
          ticketPrice: purchase.ticketPrice,
          ticketQ: purchase.ticketQ,
        };
        dispatch(savePreOrder(preOrder));
        navigate("/order");
      } else {
        Swal.fire({
          title: "Information",
          text: "You must be select a ticket and valid number!",
          icon: "info",
          confirmButtonText: "Ok",
        });
      }
    } else {
      Swal.fire({
        title: "Information",
        text: "You must be logged for to buy!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <>
      {event ? (
        <div className={style.mainContainer}>
            <NavBar className={style.navbar}/>
          <div className={style.topBody}>
            {/* <nav className={style.logoContainner}>
              <Link to='/'><img src={logo} alt="img" className={style.logo}/></Link>
              <div>
                <Link to='/login'><button className={style.button_login}>MI CUENTA</button></Link>
              </div>
            </nav> */}
            
            <img src={event.img} alt="img" className={style.image} />
            
            <div className={style.parteBaja}>
            <div className={style.info}>
            <p className={style.date}>{event.date && getShortMonthName(new Date(`${event.date}`))} {event.date && event.date.slice(8, 10)} - {event.time && event.time.slice(0, 5)} hs</p>
              <div className={style.ticket}>
                <p className={style.stage}>Tickets</p>
                <span className={`${style.stage} ${style.address}`}>Prices since $ {event.stock && event.stock.cat1price}</span>
              </div>
              <span className={style.stage}>
                {event.Stage && event.Stage.name}
              </span>
              <span className={`${style.stage} ${style.address}`}>
                {event.Stage && event.Stage.address}
              </span>
              <div className={style.map}>
                {event.Stage ? (
                  <MapContainer className={style.internoMap}
                    lat={event.Stage && event.Stage.lat}
                    lon={event.Stage && event.Stage.lon}
                    width="22vw"
                    height="35vh"
                    maxWidth="22vw"
                    maxHeight="35vh"
                    borderRadius="14px"
                  />
                ) : (
                <p>Loading map..</p>
                )}
              </div>
            </div>
                <div className={style.derecha}>
                   <div className={style.eventBody}>
              <div className={style.descriptionBody}>
              <h1 className={style.titulo}>{event.name}</h1>
                <p className={style.description}>
                  <span>{event.description}</span>
                  {stockTotal === 0 && <span className={style.soldOut}>SOLD OUT!</span>}
                </p>
              </div>
                   </div>

                   <div className={style.container_select_button}>
              <div className={style.container_select}>
                <p className={style.select_title} hidden={stockTotal === 0 ? true : false}>Ticket</p>
                <select name="ticketCategory" onChange={handleChange} className={style.select} hidden={stockTotal === 0 ? true : false}>
                  <option className={style.option} value=""></option>
                  {event.stock && event.stock.cat1name && (
                    <option className={style.option} value="cat1name">
                      {event.stock.cat1name} - Stock: {event.stock.cat1stock} -
                      ARS {event.stock.cat1price}
                    </option>
                  )}
                  {event.stock && event.stock.cat2name && (
                    <option className={style.option} value="cat2name">
                      {event.stock.cat2name} - Stock: {event.stock.cat2stock} -
                      ARS {event.stock.cat2price}
                    </option>
                  )}
                  {event.stock && event.stock.cat3name && (
                    <option className={style.option} value="cat3name">
                      {event.stock.cat3name} - Stock: {event.stock.cat3stock} -
                      ARS {event.stock.cat3price}
                    </option>
                  )}
                </select>
                <p className={style.select_title} hidden={stockTotal === 0 ? true : false}>Number</p>
                
                <select name="ticketNumber" onChange={handleQChange} className={style.select} hidden={stockTotal === 0 ? true : false}>
                  {numbers.map((number) => {
                    console.log(number)
                    return <option className={style.option} value={number}>{number}</option>;
                  })}
                </select>
              </div>
              <div className={style.buttonsContainer}>
                  {/* {user.id ? ( */}
                    <>
                      {/* disabled={token === '' ? true : false} */}
                      <button className={style.cartButton} onClick={handleBuy} hidden={stockTotal === 0 ? true : false} > 
                        Buy Now!
                      </button>
                    </>
                  {/* ) : (
                    "Login to buy your tickets!"
                  )} */}
                  {/* <Link to="/">
                    <button className={style.button_close}>Close</button>
                  </Link> */}
                </div>
                   </div>

                </div>

            </div>

          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default EventDetail;
