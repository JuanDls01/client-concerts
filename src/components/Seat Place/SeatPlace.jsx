import React, { useState } from 'react'
import style from "./SeatPlace.module.css"
export default function SeatPlace() {
    const [categories,setCategories]=useState({
        cat1:0,
        cat2:0,
        cat3:0,
        cat4:0,
    })
   function handleOnclick(e){
    setCategories({
        ...categories,
        [e.target.name]: `${e.target.value+++1}`
      });
   }
  return (
    <div className={style.conteiner}>
        {/* <button name='cat1' value={categories.cat1} onClick={(e)=>handleOnclick(e)}>Cat1</button>
        <button  name='cat2' value={categories.cat2} onClick={(e)=>handleOnclick(e)}>Cat2</button>
        <button name='cat3' value={categories.cat3} onClick={(e)=>handleOnclick(e)}>Cat3</button>
        <button name='cat4' value={categories.cat4} onClick={(e)=>handleOnclick(e)}>Cat4</button> */}
        <div className={style.secondtCubo}></div>
        <div className={style.firstCubo}></div>
    </div>
  )
}
