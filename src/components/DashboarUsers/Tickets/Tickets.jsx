import {useSelector} from 'react-redux';
import Ticket from '../Ticket/Ticket'
import s from './Tickets.module.css'

export  function Tickets({onClose}){
    let tik = useSelector((state) => state.getTickets)
    // console.log(tik[1][0].Stage.address)

    return (
      <div>
        <div className={s.container}>
          <p className={s.title}>These are your tickets</p>
          <div className={s.divbtn}><button className={s.button} onClick={onClose}> Close </button></div>
          <div className={s.divbtn}><button className={s.button} > View PDF </button></div>
            <div className={s.containerTicket}>
                {tik.Tickets?.map((t) => {
                let obj = {
                Folio: t.id.substring(0, 8),
                Event: t.Event.name,
                nameT: t.clientName,
                email: t.clientMail,
                date: t.Event.date,
                stage: "tik[1][0].Stage.name",
                adress:" tik[1][0].Stage.address",
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

