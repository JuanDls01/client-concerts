import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actionsCreator from '../../redux/actions/index';
import EventCard from '../EventCard/EventCard';


const EventsCards = () => {

    const dispatch = useDispatch();

    const {getEvents} = actionsCreator;
    useEffect(()=>{
        dispatch(getEvents());
    },[])

    const events = useSelector((state) => state.events);
    console.log(events);
    
    return (
        <div>
            {events && events.map(event => {
                return <EventCard 
                    key={event.id}
                    id={event.id}
                    name={event.name}
                    imgEvent={event.imgEvent}
                    date={event.date}
                    artistName={event.artist.name}
                    stageName={event.stage.name}
                    location={event.stage.location}
                />
            })}
        </div>
    )
}

export default EventsCards;