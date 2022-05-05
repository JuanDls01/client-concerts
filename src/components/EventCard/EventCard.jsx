import React from 'react';
import {Link} from 'react-router-dom';
// import cardImg from '../../assets/images/cardImage.png';
// import locationImg from '../../assets/images/location.png';
import style from './EventCard.module.css';
import { GoLocation } from 'react-icons/go';
import { IoPricetag } from 'react-icons/io5';
import { BiMicrophone } from 'react-icons/bi';
import { BsCalendarCheck } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getMonthName = (monthNumber) => {
    // Recibe un número como parametro y devuelve el nombre del mes correspondiente
    for(let i = 0; i < months.length; i++){
        if(i === monthNumber-1) return months[i];
    }
}

const today = Date();

const EventCard = ({ id, name, imgEvent, startdate, starttime, artistName, stageName, price, stock }) => {
    // console.log(startdate)
    const day = Number(startdate.split('-')[2]);
    // Transformo el número del mes en el nombre: 
    const monthNumber = Number(startdate.split('-')[1]);
    const monthName = getMonthName(monthNumber);
    const year = Number(startdate.split('-')[0])
    const hours = starttime.split(':')[0];
    const minutes = starttime.split(':')[1]
    const time = `${hours}:${minutes}`
    const date = `${day}th of ${monthName} a las ${time}`
    const stockTotal = parseInt(stock.cat1stock) + parseInt(stock.cat2stock) + parseInt(stock.cat3stock);
    console.log(stockTotal)
    
    // Cuantos días faltan para el evento: 
    const todayDate = Number(today.split(' ')[2]);
    const todayMonth = today.split(' ')[1];
    const todayYear = Number(today.split(' ')[3]);
    
    return (
        <div className={style.cardEvent}>
            <Link to={`/${id}`}>
                <div className={style.imgContainner} >
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
                        <p>Since: ${price}</p>
                    </div>
                    <div className={style.info}>
                        <BiMicrophone className={style.icon} />
                        <p>Band: {artistName}</p>
                    </div>
                </div>
                {
                stockTotal === 0?
                <div className={style.soldOut}>SOLD OUT</div>:
                stockTotal <= 30?
                <div className={style.lastTickets}>LAST TICKETS!</div>:
                <>{
                    (day - todayDate < 5) && (todayMonth === monthName) && (year === todayYear)?
                    <div className={style.buybttn}>IS VERY CLOSE</div>:
                    <button className={style.buybttn}>BUY TICKET</button>
                }</>}
            </Link>
        </div>
    )
};

export default EventCard;