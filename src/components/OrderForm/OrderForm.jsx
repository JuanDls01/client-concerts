import style from "./OrderForm.module.css";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import Mercado from "./Mercado";
import LoadingOverlay from "react-loading-overlay";
import { useSelector } from "react-redux";
import { useState } from "react";

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
  const [isActive, setIsActive] = useState(false);

  const simular = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.body}>
        <Countdown
          date={Date.now() + 600000}
          onComplete={handleTimeout}
        ></Countdown>

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
        {preference && <Mercado preference={preference}></Mercado>}
      </div>

      <button type="button" onClick={simular}>
        Buy
      </button>
    </div>
  );
};

export default OrderForm;
