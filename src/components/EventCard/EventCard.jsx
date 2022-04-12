import React from 'react';

const EventCard = ({ name, imgEvent, date, artistName, stageName, location }) => {
    return (
        <div>
            <img src={imgEvent} alt='imgEvent' width={200} height={200}/>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{artistName}</p>
            <p>{stageName}</p>
            <p>{location}</p>
        </div>
    )
};

export default EventCard;