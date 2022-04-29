import {useSelector} from 'react-redux';
import Ticket from '../Ticket/Ticket'


import React, {useRef} from 'react'
import { render } from 'react-dom';
import { useReactToPrint} from 'react-to-print'

import s from './Tickets.module.css'

export function Tickets({onClose}){
    let tik = useSelector((state) => state.getTickets)

    return (
      <div>
        <div className={s.container}>
          <p className={s.title}>These are your tickets</p>
          <div className={s.divbtn}><button className={s.button} onClick={onClose}> Close </button></div>
          <div className={s.divbtn}><button className={s.button} onClick={()=>{console.log("hice click")}}> View PDF </button></div>
            <div className={s.containerTicket}>
                {tik.Tickets?.map((t) => {
                let obj = {
                Folio: t.id.substring(0, 8),
                Event: t.Event.name,
                nameT: t.clientName,
                email: t.clientMail,
                date: t.Event.date,
                stage: tik.Tickets[0].Event.StageId,
                adress:tik.data,
                price: t.price,
                category: t.category,
                img: t.Event.img,
                };
                return <Ticket  props={obj} key={obj.Folio} />
                })}
            </div>
        </div>
      </div>
    );
}

