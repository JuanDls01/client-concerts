import style from "./OrderForm.module.css";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import Paypal from "./Paypal";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { BiArrowBack } from 'react-icons/bi';
import { Link } from "react-router-dom";

const OrderForm = (props) => {
  const user = useSelector((state) => state.user);
  const event = useSelector((state) => state.details);
  const preOrder = useSelector((state) => state.preOrder);

  const preference = useSelector((state) => state.preference);
  const navigate = useNavigate();

  const handleTimeout = () => {
    alert("Timeout: try again");
    navigate("/");
  };

  let miArray = [];
  useEffect(() => {
    for (let i = 0; i < preOrder.ticketQ; i++) {
      miArray.push({
        internalId: i,
        clientName: "",
        clientMail: "",
        clientId: "",
        category: preOrder.ticketName,
        price: preOrder.ticketPrice,
      });
    }
  }, [preOrder]);

  const [order, setOrder] = useState({
    userId: preOrder.userId,
    tickets: miArray,
    eventId: preOrder.eventId,
    ticketsName: preOrder.ticketName,
    ticketPrice: preOrder.ticketPrice,
    ticketQ: preOrder.ticketQ,
  });

  const handleTicketsChange = (e) => {
    const index = e.target.id;
    const property = e.target.name;
    const value = e.target.value;
    let temporaryArray = [...order.tickets];
    temporaryArray[index][property] = value;
    setOrder({ ...order, tickets: temporaryArray });
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.bttnContainner}>
        <Link to='/' className={style.bttnClose}><BiArrowBack /></Link>
      </div>
      <div className={style.body}>
        <p>Some content or children or something.</p>

        <h1>Formulario de Compra</h1>

        <div className={style.infoBody}>
          <span>Event Name: {preOrder.eventName && preOrder.eventName}</span>
          <span>Date: {preOrder.eventDate}</span>
          <span>Ticket category: {preOrder.ticketName}</span>
          <span>Items: {preOrder.ticketQ} x</span>
          <span>Price: ${preOrder.ticketPrice}</span>
          <span>
            Total: $
            {parseInt(preOrder.ticketQ) * parseInt(preOrder.ticketPrice)}
          </span>
        </div>
      </div>

      <div className={style.ticketsInputs}>
        {order.tickets &&
          order.tickets.map((ticket) => {
            return (
              <div className={style.inputs} key={ticket.id}>
                <p>{`${preOrder.ticketName}`}</p>
                <input
                  type="text"
                  id={ticket.internalId}
                  name="clientName"
                  placeholder={`Client Name`}
                  onChange={handleTicketsChange}
                />
                <input
                  type="text"
                  id={ticket.internalId}
                  name="clientMail"
                  placeholder={`Client E-Mail`}
                  onChange={handleTicketsChange}
                />
                <input
                  type="text"
                  id={ticket.internalId}
                  name="clientId"
                  placeholder={`Client ID`}
                  onChange={handleTicketsChange}
                />
              </div>
            );
          })}
      </div>

      {preference && (
        <Paypal
          order={preference}
          userId={preOrder.userId}
          internalOrder={order}
        ></Paypal>
      )}
    </div>
  );
};

export default OrderForm;
