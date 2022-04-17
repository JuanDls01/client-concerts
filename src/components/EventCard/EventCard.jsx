import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import cardImg from '../../assets/images/cardImage.png';
import locationImg from '../../assets/images/location.png';
import style from './EventCard.module.css';
import { GoLocation } from 'react-icons/go';
import { IoPricetag } from 'react-icons/io5';
import { BiMicrophone } from 'react-icons/bi';
import { BsCalendarCheck } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const getMonthName = (monthNumber) => {
    // Recibe un número como parametro y devuelve el nombre del mes correspondiente
    for(let i = 0; i < months.length; i++){
        if(i === monthNumber) return months[i];
    }
}

const EventCard = ({ id, name, imgEvent, startdate, starttime, artistName, stageName, price }) => {
    console.log(startdate)
    const day = Number(startdate.split('-')[2]);
    // Transformo el número del mes en el nombre: 
    const monthNumber = Number(startdate.split('-')[1]);
    const monthName = getMonthName(monthNumber);
    const hours = starttime.split(':')[0];
    const minutes = starttime.split(':')[1]
    const time = `${hours}:${minutes}`
    const date = `${day} de ${monthName} a las ${time}`
    console.log('monthName', monthName);

    // const [favSelected, setFavSelected] = useState(false)

    // const selectFav = () => {
    //     setFavSelected(true)
    // }
    
    return (
        <div className={style.cardEvent}>
            <Link to={`/${id}`}>
                <div className={style.imgContainner} >
                    <button className={style.bttnHeart}>
                        <AiFillHeart className={style.heart} />
                    </button>
                    <img src={imgEvent} alt='imgEvent'/>
                </div>
                <div className={style.infoContainner}>
                    <h3 className={style.titleEvent}>{name}</h3>
                    <div className={style.info}>
                        <BsCalendarCheck className={style.icon} />
                        <p>{date}</p>
                    </div>
                    <div className={style.info}>
                        <GoLocation className={style.icon} />
                        {/* <img src={locationImg} alt='location'/> */}
                        <p>{stageName}</p>
                    </div>
                    <div className={style.info}>
                        <IoPricetag className={style.icon}/>
                        <p>Desde: {price}</p>
                    </div>
                    <div className={style.info}>
                        <BiMicrophone className={style.icon} />
                        <p>Banda: {artistName}</p>
                    </div>
                </div>
            </Link>
            <button className={style.buybttn}>COMPRAR</button>
        </div>
    )
};

export default EventCard;