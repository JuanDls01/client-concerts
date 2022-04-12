import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getEventDetail, cleanEventDetail } from "../redux/actions"; 

const EventDetail = () => {
  const dispatch = useDispatch;
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEventDetail(id));
    return () => {
      dispatch(cleanEventDetail());
    }
  }, [dispatch, id]);

  const event = useSelector(state => state.details);

  return (
    <>
      {
        event.length > 0 ?
        <>
            <img src="#" alt="image">Event Image</img>
            <h1>Event Name</h1>
            <h3>Event Description</h3>
            <p>Event Date</p>
            <p>Event Location</p>
            <p>Event Direction</p>
          <div>
              <Link to='/home'><button>Close</button></Link>
              <label>Ticket</label>
              <button>-</button><p>Numbre of tickest</p><button>+</button>
              <button>Shopping Cart</button><button>Buy Now</button>
          </div>
        </> : <p>Loading...</p>
      } 
    </>
  )
}

export default EventDetail;
