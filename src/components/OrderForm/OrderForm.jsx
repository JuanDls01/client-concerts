import style from "./OrderForm.module.css";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import Paypal from "./Paypal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logotipo.png";
import checkTicket from "../../utils/checkTicket";
import savePreference from "../../redux/actions/savePreference";

const OrderForm = (props) => {
  const user = useSelector((state) => state.user);
  const event = useSelector((state) => state.details);
  const preOrder = useSelector((state) => state.preOrder);
  const [allowBuy, setAllowBuy] = useState(false);
  const dispatch = useDispatch();

  const preference = useSelector((state) => state.preference);
  const navigate = useNavigate();

  useEffect(() => {
    if (!preference) navigate(-1);
    return () => {
      dispatch(savePreference(""));
    };
  }, [preference, navigate]);

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
    setAllowBuy(checkTicket(order.tickets));
  };

  return (
    <div className={style.contenedor}>
      <div className={style.mitarArriba}>
        <img src={logo} className={style.logo} alt={logo} />
        <p className={style.letrasFondo}>
          <strong>Pay With Your Paypal Account</strong>
        </p>
      </div>

      <div className={style.interno}>
        <div className={style.izquierda}>
          <div className={style.encabezadoIzquierda}>
            <Link to="/" className={style.bttnClose}>
              <BiArrowBack />
            </Link>
            <p className={style.checkout}>
              <strong>Checkout</strong>
            </p>
          </div>
          <div className={style.infoBody}>
            <span className={style.span}>
              <strong>Event Name:</strong>{" "}
              {preOrder.eventName && preOrder.eventName}
            </span>
            <span className={style.span}>
              <strong>Date:</strong> {preOrder.eventDate}
            </span>
            <span className={style.span}>
              <strong>Ticket category:</strong> {preOrder.ticketName}
            </span>
            <span className={style.span}>
              <strong>Tickets: </strong> {preOrder.ticketQ} x
            </span>
            <span className={style.span}>
              <strong>Price Ticket:</strong> ${preOrder.ticketPrice}
            </span>
            <span className={style.spanTotal}>
              <strong>Total: </strong> $
              {parseInt(preOrder.ticketQ) * parseInt(preOrder.ticketPrice)}
            </span>
          </div>
          <div className={style.pp}>
            {preference && allowBuy && (
              <Paypal
                order={preference}
                userId={preOrder.userId}
                internalOrder={order}
              ></Paypal>
            )}
          </div>
        </div>
        <div className={style.derecha}>
          <div className={style.ticketsInputs}>
            {order.tickets &&
              order.tickets.map((ticket) => {
                return (
                  <div className={style.inputs} key={ticket.id}>
                    <div className={style.nameTriangulo}>
                      <div className={style.triangulo}>{""}</div>
                      <p>{`${preOrder.ticketName}`}</p>
                    </div>
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
                      placeholder={`Client DNI`}
                      onChange={handleTicketsChange}
                    />
                    <div className={style.borde}>{""}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
