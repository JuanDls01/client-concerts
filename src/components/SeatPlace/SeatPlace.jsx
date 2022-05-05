import { useState } from "react";
import LunaPark from "./plantilla/LunaPark/LunaPark";
import GranRex from "./plantilla/GranRex/GranRex";
import style from "./SeatPlace.module.css";

export default function SeatPlace(Planti) {
  const [first, setFirst] = useState("");
  const [cantidad, setCantidad] = useState(0);

  function handleonClick(e) {
    setFirst(e.target.id);
  }

  return (
    <div>
      {/* ACA VA A IR EL TIPO DE PLANTILLA DE ACUERDO AL ESCENARIO (POR AHORA SOLO HAY PLANTILLAS DE GRAN REX Y LUNA PARK) */}
      <Planti handleonClick={handleonClick} />
      <div className={style.conten}>
        <div>
          <h3 className={style.category}>Category:</h3>
          <h3>{first}</h3>
        </div>
        <div className={style.contenCantidad}>
          {/* <div>
            <button
              className={style.boton1}
              value={cantidad}
              onClick={(e) =>
                setCantidad(
                  e.target.value < 4 ? e.target.value++ + 1 : e.target.value
                )
              }
            >
              +
            </button>
            <button
              className={style.boton2}
              value={cantidad}
              onClick={(e) =>
                setCantidad(
                  e.target.value > 0 ? e.target.value-- - 1 : e.target.value
                )
              }
            >
              -
            </button>
          </div> */}
          <h3>{cantidad}</h3>
        </div>
      </div>
    </div>
  );
}
