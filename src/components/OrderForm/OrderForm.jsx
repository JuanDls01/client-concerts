import style from "./OrderForm.module.css";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import Paypal from "./Paypal";
import LoadingOverlay from "react-loading-overlay";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const OrderForm = (props) => {
  const user = useSelector((state) => state.user);
  const event = useSelector((state) => state.details);
  const preOrder = useSelector((state) => state.preOrder);
  console.log(preOrder);
  const preference = useSelector((state) => state.preference);
  const navigate = useNavigate();
  console.log(preference);

  const handleTimeout = () => {
    alert("Timeout: try again");
    navigate("/");
  };
  const [isActive, setIsActive] = useState(false);

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
    <LoadingOverlay
      active={isActive}
      spinner
      text="Processing your purchase..."
    >
      <div className={style.mainContainer}>
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

        {preference && <Paypal order={preference}></Paypal>}
      </div>
    </LoadingOverlay>
  );
};

export default OrderForm;
