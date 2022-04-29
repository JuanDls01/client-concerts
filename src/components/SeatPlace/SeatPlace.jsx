import { useState } from "react"
import LunaPark from "./plantilla/LunaPark/LunaPark"
import GranRex from "./plantilla/GranRex/GranRex"
import style from "./SeatPlace.module.css"



export default function SeatPlace() {

   const [first,setFirst]=useState("")

   function handleonClick(e) {
      setFirst(e.target.id)
   }

  return (
    <div >
      {/* ACA VA A IR EL TIPO DE PLANTILLA DE ACUERDO AL ESCENARIO (POR AHORA SOLO HAY PLANTILLAS DE GRAN REX Y LUNA PARK) */}
        <GranRex handleonClick= {handleonClick}/>
        <div className={style.category}>
          <h3>Tickets: {first}</h3>
        </div>
    </div>
  )
  
}



