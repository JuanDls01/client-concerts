import style from "./OrderForm.module.css";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useMercadopago } from "react-sdk-mercadopago";
import { useSelector } from "react-redux";

const OrderForm = (props) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleTimeout = () => {
    alert("Timeout: try again");
    navigate("/");
  };

  const mercadopago = useMercadopago.v2(
    "TEST-cefc5873-9a5f-4f12-a1fa-d564350b7466",
    {
      locale: "en-US",
    }
  );
  console.log(mercadopago);

  useEffect(() => {
    if (mercadopago) {
      const miMercado = mercadopago.checkout({
        preference: {
          id: "249975492-6d9e0050-9c9a-4f9e-a947-1bfb7c793137",
        },
        render: {
          container: "#mercado",
          label: "Pay",
        },
      });
      console.log(miMercado);
    }
  }, [mercadopago]);

  return (
    <>
      <Countdown
        date={Date.now() + 600000}
        onComplete={handleTimeout}
      ></Countdown>

      <h1>Formulario de Compra</h1>
      <div id="mercado"></div>
      <div className={style.infoBody}>
        <span>Recital de Metallica</span>
        <span>2022/04/25</span>
        <span>Entrada General</span>
        <span>5</span>
        <span>$10000</span>
      </div>
      <button type="button">Buy</button>
    </>
  );
};

export default OrderForm;
