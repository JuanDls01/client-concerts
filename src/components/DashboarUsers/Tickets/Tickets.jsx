import { useSelector } from "react-redux";
import Ticket from "../Ticket/Ticket";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import Modal from "../../Modal/Modal";
import { TicketsPDF } from "../TicketsPDF/TicketsPDF";

import React, { useRef, useState } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

import s from "./Tickets.module.css";

export function Tickets({ onClose }) {
  let tik = useSelector((state) => state.getTickets);
  const [mostrar, setMostrar] = useState(false);
  let navigate = useNavigate();

  function handleClick() {
    setMostrar(!mostrar);
  }

  return (
    <div>
      <div className={s.container}>
        <p className={s.title}>These are your tickets</p>
        <div className={s.botones}>
          <div className={s.divbtn}>
            <button className={s.button} onClick={onClose}>
              {" "}
              Close{" "}
            </button>
          </div>
          {/* <div className={s.divbtn}><Link className={s.button} to='/pdf' target='_blank'> Download PDF </Link></div> */}
          {/* <div className={s.divbtn}><button className={s.button} onClick={()=>navigate('/pdf', { replace: true })}> Download PDF </button></div> */}

          <div className={s.divbtn}>
            <button className={s.button} onClick={() => handleClick()}>
              {" "}
              Download PDF{" "}
            </button>
          </div>

          {mostrar && (
            <Modal>
              <TicketsPDF onClose={handleClick} />
            </Modal>
          )}

          {/* <div className={s.divbtn}><button className={s.button} onClick={()=> window.print()}> Download 2 PDF </button></div> */}
        </div>
        <div className={s.containerTicket}>
          {tik.Tickets?.map((t) => {
            let obj = {
              Folio: t.id.substring(0, 8),
              Event: t.Event.name,
              nameT: t.clientName,
              email: t.clientMail,
              date: t.Event.date,
              stage: tik.Tickets[0].Event.StageId,
              adress: tik.data,
              price: t.price,
              category: t.category,
              img: t.Event.img,
            };
            return <Ticket props={obj} key={obj.Folio} />;
          })}
        </div>
      </div>
    </div>
  );
}
