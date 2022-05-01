import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "./EventDetail.module.css";
import actionsCreator from "../../redux/actions/index";
import MapContainer from "../MapContainer/MapContainer";
import determinarPrecio from "../../utils/determinarPrecio";
import savePreference from "../../redux/actions/savePreference";
import savePreOrder from "../../redux/actions/savePreOrder";
import logo from "../../assets/images/logotipo.png"
import styled from "styled-components";
import { animateScroll as scroll} from 'react-scroll';

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

const numbers = [0, 1, 2, 3, 4, 5];

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

  const event = useSelector((state) => state.details);

  const [purchase, setPurchase] = useState({
    userId: user.id,
    ticketCategory: null,
    ticketName: null,
    ticketQ: 0,
    ticketPrice: null,
  });

  const handleChange = (e) => {
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
  };

  return (
    <>
      {event ? (
        <div className={style.mainContainer}>
          <div className={style.topBody}>
            <nav className={style.logoContainner}>
              <Link to='/'><img src={logo} alt="img" className={style.logo}/></Link>
              <div>
                <Link to='/login'><button className={style.button_login}>MI CUENTA</button></Link>
              </div>
            </nav>
            
            <img src={event.img} alt="img" className={style.image} />
            
            <div className={style.info}>
            <p className={style.date}>{event.date && getShortMonthName(new Date(`${event.date}`))} {event.date && event.date.slice(8, 10)} - {event.time && event.time.slice(0, 5)} hs</p>
              <div className={style.ticket}>
                <p className={style.stage}>Tickets</p>
                <span className={`${style.stage} ${style.address}`}>Prices from $ {event.stock && event.stock.cat1price}</span>
              </div>
              <span className={style.stage}>
                {event.Stage && event.Stage.name}
              </span>
              <span className={`${style.stage} ${style.address}`}>
                {event.Stage && event.Stage.address}
              </span>
              <div className={style.map}>
                {event.Stage ? (
                  <MapContainer
                    lat={event.Stage && event.Stage.lat}
                    lon={event.Stage && event.Stage.lon}
                    marginLeft="0%"
                    maxWidth="14%"
                    maxHeight="25%"
                  />
                ) : (
                <p>Loading map..</p>
                )}
              </div>
            </div>
            <div className={style.eventBody}>
              <div className={style.descriptionBody}>
              <h1 className={style.titulo}>{event.name}</h1>
                {/* <span className={style.date_circle}>
                  <p className={style.date_1}>
                    {event.date && getShortMonthName(new Date(`${event.date}`))}
                  </p>
                  <p className={style.date_2}>
                    {event.date && event.date.slice(8, 10)}
                  </p>
                </span> */}
                <p className={style.description}>
                  <span>{event.description}</span>
                  {/* <span>
                    <u>Stage:</u> {event.Stage && event.Stage.name}
                  </span>
                  <span>
                    <u>Address:</u> {event.Stage && event.Stage.address}
                  </span> */}
                </p>
              </div>
            </div>

            <div className={style.container_select_button}>
              <div className={style.container_select}>
                <p className={style.select_title}>Ticket</p>
                <select name="ticketCategory" onChange={handleChange}className={style.select}>
                  <option value=""></option>
                  {event.stock && event.stock.cat1name && (
                    <option value="cat1name">
                      {event.stock.cat1name} - Stock: {event.stock.cat1stock} -
                      ARS {event.stock.cat1price}
                    </option>
                  )}
                  {event.stock && event.stock.cat2name && (
                    <option value="cat2name">
                      {event.stock.cat2name} - Stock: {event.stock.cat2stock} -
                      ARS {event.stock.cat2price}
                    </option>
                  )}
                  {event.stock && event.stock.cat3name && (
                    <option value="cat3name">
                      {event.stock.cat3name} - Stock: {event.stock.cat3stock} -
                      ARS {event.stock.cat3price}
                    </option>
                  )}
                </select>
                <p className={style.select_title}>Number</p>
                <select name="ticketNumber" onChange={handleQChange} className={style.select}>
                  {numbers.map((number) => {
                    return <option value={number}>{number}</option>;
                  })}
                </select>
              </div>
              <div className={style.buttonsContainer}>
                  {/* {user.id ? ( */}
                    <>
                      <button className={style.cartButton} onClick={handleBuy}>
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
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default EventDetail;
