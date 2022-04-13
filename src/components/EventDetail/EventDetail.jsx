import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import actionsCreator from '../../redux/actions/index';
//const json = require('../events.json')

const EventDetail = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const id = 123456789 //useParams

  const { getEventDetail, cleanEventDetail } = actionsCreator;

  useEffect(() => {
    dispatch(getEventDetail(id));
    return () => {
      dispatch(cleanEventDetail());
    }
  }, [dispatch]);

  const event = useSelector(state => state.details);

  const eventArray = []
  eventArray[0] = event
  
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
        eventArray.length > 0 ?
        <div>
          <div>
            <img src={eventArray[0].imgEvent} alt="img" style={{width: "400px"}}/> ;
            <h1>{eventArray[0].name}</h1>
            <h3>{eventArray[0].description}</h3>
            <p>Date: {eventArray[0].date}</p>
            {/* <p>Location: {eventArray[0].stage.location}</p> */}
            {/* <p>Event Direction: {eventArray[0]['stage']['address']}</p> */}
          </div>
          <div>
              <Link to='/home'><button>Close</button></Link><br/><br/>
              <label>Tickets</label><br/><br/>
              <button onClick={() => dec()}>-</button>{count}<button onClick={() => inc()}>+</button><br/><br/>
              <button>Shopping Cart</button><button>Buy Now</button>
          </div>
        </div> : <p>loading...</p>
      } 
    </>
  )
}

export default EventDetail;
