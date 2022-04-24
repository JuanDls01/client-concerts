import style from "./OrderForm.module.css";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import Mercado from "./Mercado";

import { useSelector } from "react-redux";

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

  const simular = () => {};

  return (
    <div className={style.mainContainer}>
      <Countdown
        date={Date.now() + 600000}
        onComplete={handleTimeout}
      ></Countdown>

      <h1>Formulario de Compra</h1>
      {preference && <Mercado preference={preference}></Mercado>}

      <div className={style.infoBody}>
        <span>{preOrder.eventName && preOrder.eventName}</span>
        <span>{preOrder.eventDate}</span>
        <span>{preOrder.ticketName}</span>
        <span>{preOrder.ticketQ} x</span>
        <span>${preOrder.ticketPrice}</span>
        <span>
          ${parseInt(preOrder.ticketQ) * parseInt(preOrder.ticketPrice)}
        </span>
      </div>
      <button type="button" onClick={simular}>
        Buy
      </button>
    </div>
  );
};

export default OrderForm;
