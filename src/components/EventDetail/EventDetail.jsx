import React, { useEffect } from "react";
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
  // const [count, setCount] = useState(0);
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

  // const dec = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  // const inc = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      { event ? (
        <div className={style.mainContainer}>
          <div className={style.topBody}>
            <img src={event.img} alt="img" className={style.image} />
            <div className={style.buttonsContainer}>
            
              <table>
              <tr className={style.tr1}>
                <th>Ticket</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Cantidad</th>
              </tr>
              <tr>
                <td>Ticket #1</td>
                <td>$ {event.lowestPrice}</td>
                <td>2.000</td>
                <select>
                  <option value="value1">1</option>
                  <option value="value2">2</option>
                  <option value="value3">3</option>
                </select>
              </tr>
              <tr>
                <td>Ticket #2</td>
                <td>$ {event.lowestPrice}</td>
                <td>1.500</td>
                <select>
                  <option value="value1">1</option>
                  <option value="value2">2</option>
                  <option value="value3">3</option>
                </select>
              </tr>
                <tr>
                <td>Ticket #3</td>
                <td>$ {event.lowestPrice}</td>
                <td>500</td>
                <select>
                  <option value="value1">1</option>
                  <option value="value2">2</option>
                  <option value="value3">3</option>
                </select>
              </tr>
            </table>
           
              <div className={style.cartButtons}>
                <Link to="/buy">
                  <button className={style.cartButton}>Buy Now!</button>
                </Link>
                <Link to="/">
                  <button className={style.button_close}>Close</button>
                </Link>
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

  //  {/* <Link to="/">
  //               <button className={style.button_close}>Close</button>
  //             </Link> */}
  //             {/* <label className={style.ticket}>Tickets</label>
  //             <div className={style.ticketsButtons}>
  //               <button className={style.ticketButton} onClick={() => dec()}>
  //                 -
  //               </button>
  //               <p className={style.ticketCount}>{count}</p>
  //               <button className={style.ticketButton} onClick={() => inc()}>
  //                 +
  //               </button>
  //             </div> */}