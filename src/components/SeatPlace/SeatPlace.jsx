import React, { useState } from 'react'
import style from "./SeatPlace.module.css"
export default function SeatPlace() {
   const [ticket,setTicket]=useState(0)
   const [first,setFirst]=useState("")
 

  //  && e.target.value <5 
  function onClick(e){
    if(e.target.value<4){
   if(first){
    if(first ===e.target.name){
      setTicket(e.target.value+++1)
    }else{
      alert("solo puedes comprar ticket de una sola categoria")
    }
  }else{
    setFirst(e.target.name)
    setTicket(e.target.value+++ 1)
  }
  }else{
    alert("puedes comprar hasta 4 tickets por compra")
  }
}
  return (
    <div className={style.display}>
    <div className={style.conteiner}>
        <h1 className={style.titulo}>ESCENARIO</h1>
        <button name='categoria 1' value={ticket} onClick={(e)=>onClick(e)} className={style.cat1_1}>Cat1</button>
        <button name='categoria 1' value={ticket} onClick={(e)=>onClick(e)} className={style.cat1_2}>Cat1</button>
        <button name='categoria 1' value={ticket} onClick={(e)=>onClick(e)} className={style.cat1_3}>Cat1</button>
        <button name='categoria 1' value={ticket} onClick={(e)=>onClick(e)} className={style.cat1_4}>Cat1</button>
        <button name='categoria 2' value={ticket} onClick={(e)=>onClick(e)} className={style.cat2}>Cat2</button>
        <button name='categoria 3' value={ticket} onClick={(e)=>onClick(e)} className={style.cat3}>Cat3</button>
        <button name='categoria 4' value={ticket} onClick={(e)=>onClick(e)} className={style.cat4}>Cat4</button>
    </div>
    </div>
  )
}
