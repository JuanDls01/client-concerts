import {useSelector} from 'react-redux';
import TicketPDF from '../TicketPDF/TicketPDF'
// import {PDFViewer} from '@react-pdf/renderer';
import s from './TicketsPDF.module.css'

export  function TicketsPDF({onClose, tik}){
    // let tik = useSelector((state) => state.getTickets)

    return (
      <div>
        <div className={s.container}>
          <p className={s.title}>These are your tickets</p>
          <div className={s.divbtn}><button className={s.button} onClick={onClose}> Close </button></div>
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
                return <TicketPDF  props={obj} key={obj.Folio} />
                })}
            </div>
        </div>
      </div>
    );
}

