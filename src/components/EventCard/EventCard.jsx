import React from 'react';
import cardImg from '../../assets/images/cardImage.png';
import locationImg from '../../assets/images/location.png'
import style from './EventCard.module.css'

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const getMonthName = (monthNumber) => {
    // Recibe un número como parametro y devuelve el nombre del mes correspondiente
    for(let i = 0; i < months.length; i++){
        if(i === monthNumber) return months[i];
    }
}

const EventCard = ({ name, imgEvent, date, artistName, stageName, location }) => {
    
    const day = Number(date.split('-')[2]);
    // Transformo el número del mes en el nombre: 
    const monthNumber = Number(date.split('-')[1]);
    const monthName = getMonthName(monthNumber).toUpperCase().substring(0,3);
    console.log('monthName', monthName);
    
    return (
        <div className={style.cardEvent}>
            <div className={style.imgContainner}>
                {/* <img src={cardImg} alt='imgEvent' width={200} height={200}/> */}
            </div>
            <div className={style.infoContainner}>
                <div className={style.dateContainner}>
                    <p className={style.monthName}>{monthName}</p>
                    <p className={style.day}>{day}</p>
                </div>
                <div className={style.titleContainner}>
                    <h3>{name}</h3>
                    <div className={style.artist}>
                        <p>{artistName}</p>
                    </div>
                    <div className={style.location}>
                        <img src={locationImg} alt='location'/>
                        <p>{stageName}</p>
                    </div>
                    
                    {/* <p>{location}</p> */}
                </div>
            </div>
        </div>
    )
};

export default EventCard;