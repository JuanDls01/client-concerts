import React, { useEffect, useState } from 'react';
import style from './FormBttn.module.css'

const FormBttn = ({inputErros, firstValue, text}) => {
    // Bttn que recibe como param un objeto de errores, el primer valor de un input y el texto que 
    // queremos mostrar dentro del bttn. Valida el bttn si no hay errores y si el primer valor no 
    // es un string vacio, sino permanece deshabilitado

    // console.log('inputErros', inputErros)
    // console.log('firstvalue', firstValue)

    const [disable, setDisable] = useState(true);

    useEffect(() => {
        // console.log('useEffect')
        if(Object.keys(inputErros).length === 0 && firstValue) setDisable(false);
        else setDisable(true);
    })

    return (
        <button
            type="submit"
            disabled = {disable}
            className={disable ? style.bttndisabled : style.bttnsubmit}
        >{text}</button>
    )
}

export default FormBttn;