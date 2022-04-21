import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./EventDetail.module.css";
import actionsCreator from "../../redux/actions/index";
import MapContainer from "../MapContainer/MapContainer";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const getShortMonthName = (date) => {
    return monthNames[date.getMonth()].substring(0, 3);
}

const EventDetail = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { getEventDetail, cleanEventDetail } = actionsCreator;

  useEffect(() => {
    dispatch(getEventDetail(id));
    return () => {
      dispatch(cleanEventDetail());
    };
  }, [dispatch, id,cleanEventDetail,getEventDetail]);

  const event = useSelector((state) => state.details);
  console.log(event)
  // const monthNumber = Number(event.date.split('-')[1]);
  // const monthName = getMonthName(monthNumber);


  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const inc = () => {
    setCount(count + 1);
  };

  return (
    <>
      {event ? (
        <div className={style.mainContainer}>
          <div className={style.topBody}>
            <img src={event.img} alt="img" className={style.image} />
            <div className={style.buttonsContainer}>
              <Link to="/">
                <button className={style.button_close}>Close</button>
              </Link>
              <label className={style.ticket}>Tickets</label>
              <div className={style.ticketsButtons}>
                <button className={style.ticketButton} onClick={() => dec()}>
                  -
                </button>
                <p className={style.ticketCount}>{count}</p>
                <button className={style.ticketButton} onClick={() => inc()}>
                  +
                </button>
              </div>
              <div className={style.cartButtons}>
                <button className={style.cartButton}>Shopping Cart</button>
                <button className={style.cartButton}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className={style.eventBody}>
            <h1 className={style.titulo}>{event.name}</h1>
            <div className={style.descriptionBody}>
              <span className={style.date_circle}>
                <p className={style.date_1}>
                  {event.date && getShortMonthName(new Date(`${event.date}`))}
                </p>
                <p className={style.date_2}>
                  {event.date && event.date.slice(8, 10)}
                </p>
              </span>
              <p className={style.description}>
                <span>{event.description}</span>
                <span>
                  <u>Stage:</u> {event.Stage && event.Stage.name}
                </span>
                <span>
                  <u>Address:</u> {event.Stage && event.Stage.address}
                </span>
              </p>
            </div>
          </div>
          <div className={style.map}>
            {event.Stage ? (
              <MapContainer
                lat={event.Stage && event.Stage.lat}
                lon={event.Stage && event.Stage.lon}
              />
            ) : (
              <p>Loading map..</p>
            )}
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default EventDetail;

/*<div>
            
            
            
            
            
            <p className={`${style.location} ${style.direction}`}>
              
            </p>
          </div>
          <div>
            
         
            
            
            
            <br />
            <br />
            
          </div>*/
