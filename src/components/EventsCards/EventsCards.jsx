import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import actionsCreator from "../../redux/actions/index";
import EventCard from "../EventCard/EventCard";
import Paginated from "../Paginated/Paginated";
import style from "./EventsCards.module.css";

const INITIALPAGE = 0;
const EVENTSPERPAGE = 6;

const EventsCards = () => {
  const dispatch = useDispatch();

  const { getEvents } = actionsCreator;
  useEffect(() => {
    console.log("hola");
    dispatch(getEvents());
  }, []);

  // Eventos traídos del estado global:
  const events = useSelector((state) => state.events);
  console.log("events", events);

  // Estado que indica la página actual:
  const [currentPage, setCurrentPage] = useState(INITIALPAGE);
  // Guardamos el índice de la primer carta que renderizamos:
  const pagesVisited = currentPage * EVENTSPERPAGE;
  // Array de las cartas que renderizamos en la página actual:
  const currentEvents = events.slice(
    pagesVisited,
    pagesVisited + EVENTSPERPAGE
  );
  // if(currentEvents.length>0)

  return (
    <div className={style.EventsPaginatedContainner}>
      <div className={style.EventsCardsContainner}>
        {currentEvents.length &&
          currentEvents.map((event) => {
            return (
              <EventCard
                key={event.id}
                id={event.id}
                name={event.name}
                imgEvent={event.img}
                startdate={event.date}
                starttime={event.time}
                artistName={event.Artist.name}
                stageName={event.Stage.name}
                price={event.price}
                // location={event.stage.location}
              />
            );
          })}
      </div>
      <div className={style.paginatedContainner}>
        <Paginated
          events={events.length}
          setCurrentPage={setCurrentPage}
          eventsPerPage={EVENTSPERPAGE}
        />
      </div>
    </div>
  );
};

export default EventsCards;
