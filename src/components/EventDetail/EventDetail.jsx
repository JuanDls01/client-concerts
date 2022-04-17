import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import style from './EventDetail.module.css';
import actionsCreator from '../../redux/actions/index';

const EventDetail = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { getEventDetail, cleanEventDetail } = actionsCreator;

  useEffect(() => {
    dispatch(getEventDetail(id));
    return () => {
      dispatch(cleanEventDetail());
    }
  }, [dispatch, id]);

  const event = useSelector(state => state.details);
 
  const dec = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const inc = () => {
    setCount(count + 1)
  }

  return (
    <>
      {
        event ?
        <div className={style.fondo}>
          <div>
            <img src={event.img} alt="img" className={style.image}/>
            <p className={style.titulo}>{event.name}</p>
            <p className={style.description}>{event.description}</p>
            <span className={style.date_circle}>
              <p className={style.date_1}>{event.startdate && event.startdate.slice(8,10)}</p>
              <p className={style.date_2}>{event.startdate && event.startdate.slice(5,7)}</p>
            </span>
            <p className={style.location}>Stage: { event.Stage && event.Stage.name }</p>
            <p className={`${style.location} ${style.direction}`}>Direction: { event.Stage && event.Stage.address}</p>
          </div>
          <div>
              <Link to='/'><button className={style.button_close}>Close</button></Link><br/><br/>
              <label className={style.ticket}>Tickets</label><br/><br/>
              <button className={style.button_res} onClick={() => dec()}>-</button><p className={style.number}>{count}</p><button className={style.button_sum}onClick={() => inc()}>+</button><br/><br/>
              <button className={style.button_add}>Shopping Cart</button><button className={style.button_buy}>Buy Now</button>
          </div>
        </div> : <p>loading...</p>
      } 
    </>
  )
}

export default EventDetail;
