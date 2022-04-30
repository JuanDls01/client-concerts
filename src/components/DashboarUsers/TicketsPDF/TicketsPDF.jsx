import {useSelector} from 'react-redux';
import TicketPDF from '../TicketPDF/TicketPDF';
import Ticket from '../Ticket/Ticket';

import {PDFViewer, Document, Page, View, Text} from '@react-pdf/renderer';


import React from 'react'
import { render } from 'react-dom';
import { useReactToPrint} from 'react-to-print'

import s from './TicketsPDF.module.css'

export default function TicketsPDF(){
    let tik = useSelector((state) => state.getTickets)

    console.log(tik)

    return (
          <PDFViewer style={{width:'100%', height: '90vh'}  }>
            <Document>
              <Page size="A4">
              <View>
          <Text className={s.title}>These are your tickets</Text>
          {/* <div className={s.botones}>
          <div className={s.divbtn}><button className={s.button} onClick={onClose}> Close </button></div>
          </div> */}
            <View className={s.containerTicket}>
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
                return <TicketPDF props={obj} key={obj.Folio} />
                })}
            </View>
        
      </View>
              </Page>
          </Document>
          </PDFViewer>
    );
}






// import {useSelector} from 'react-redux';
// import TicketPDF from '../TicketPDF/TicketPDF'
// // import {PDFViewer} from '@react-pdf/renderer';
// import s from './TicketsPDF.module.css'

// export default function TicketsPDF({onClose, tik}){
//     // let tik = useSelector((state) => state.getTickets)

//     return (
//       <div>
//         <div className={s.container}>
//           <p className={s.title}>These are your tickets</p>
//           <div className={s.divbtn}><button className={s.button} onClick={onClose}> Close </button></div>
//             <div className={s.containerTicket}>
//                 {tik.Tickets?.map((t) => {
//                 let obj = {
//                 Folio: t.id.substring(0, 8),
//                 Event: t.Event.name,
//                 nameT: t.clientName,
//                 email: t.clientMail,
//                 date: t.Event.date,
//                 stage: "tik[1][0].Stage.name",
//                 adress:" tik[1][0].Stage.address",
//                 price: t.price,
//                 category: t.category,
//                 img: t.Event.img,
//                 };
//                 return <TicketPDF  props={obj} key={obj.Folio} />
//                 })}
//             </div>
//         </div>
//       </div>
//     );
// }

