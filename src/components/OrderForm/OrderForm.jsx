import style from './OrderForm.module.css'
import Countdown from 'react-countdown'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import {useSelector} from 'react-redux';



const OrderForm = (props) => {
  const user=useSelector(state=>state.user)
  const navigate=useNavigate();

  const [orderInfo,setOrderInfo]=useState({
    user:user
  })

  

  const handleTimeout=()=>{
    alert("Timeout: try again");
    navigate(-1);
  }

const handleBuy=()=>{
  axios.post("http://localhost:3001/order/confirm",orderInfo)
}  
  
  return  (
  <>
  <Countdown date={Date.now()+600000} onComplete={handleTimeout}></Countdown>
    
    <h1>Formulario de Compra</h1>
    <div className={style.infoSection}>
    <table>
      <thead>
      <tr>
        <td>Nombre del Evento</td>
        <td>Fecha del evento</td>
        <td>Tipo de entrada pedida</td>
        <td>Cantidad de entradas pedidas</td>
        <td>Total del valor de la compra</td>
      </tr>
      </thead>
      
    </table>
    </div>
    
    
    <div className={style.infoBody}>
      <span>Recital de Metallica</span>
      <span>2022/04/25</span>
      <span>Entrada General</span>
      <span>5</span>
      <span>$10000</span>
    </div>
    <button type='button' onClick={handleBuy}>Buy</button>
  
  </>
  );
  
};

export default OrderForm;
