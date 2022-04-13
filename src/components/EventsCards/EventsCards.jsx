import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actionsCreator from '../../redux/actions/index';
import EventCard from '../EventCard/EventCard';
import Paginated from '../Paginated/Paginated';

const INITIALPAGE = 0;
const EVENTSPERPAGE = 6;

const EventsCards = () => {

    const dispatch = useDispatch();

    const {getEvents} = actionsCreator;
    useEffect(()=>{
        dispatch(getEvents());
    },[])

    // Eventos traídos del estado global: 
    const events = useSelector((state) => state.events);

    // Estado que indica la página actual:
    const [currentPage, setCurrentPage] = useState(INITIALPAGE);
    // Guardamos el índice de la primer carta que renderizamos:
    const pagesVisited = currentPage*EVENTSPERPAGE;
    // Array de las cartas que renderizamos en la página actual:
    const currentEvents = events.slice(pagesVisited, pagesVisited + EVENTSPERPAGE);
    
    return (
        <div>
            <div>
                {currentEvents && currentEvents.map(event => {
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
            <div>
                <Paginated currentPage={currentPage} setCurrentPage={setCurrentPage} eventsPerPage={EVENTSPERPAGE}/>
            </div>
        </div>
    )
}

export default EventsCards;