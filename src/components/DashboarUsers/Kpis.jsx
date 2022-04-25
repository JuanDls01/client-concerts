import React from 'react'
import style from "./Kpis.module.css"

export default function Kpis({title,analitics,estadistics,img}) {
  return (
    <div className={style.contentAnalitics}>
          <div className={style.cardAnalatics}>
            <img src={img} className={style.imgCard} ></img>
            <div className={style.analitics}>
                <h3>{title}</h3>
                 <h2>{analitics}</h2>
            </div>
              {estadistics?
              <div className={style.estadistics} >{estadistics}</div>
                :<p></p>}
          </div> 
      </div>
  )
}
