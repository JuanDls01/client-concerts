import React, { useEffect, useState } from 'react';
import style from './FormBttn.module.css'

const FormBttn = ({inputErros, input}) => {
    // Bttn que sirve más que nada para los formularios porque recibe los errores entonces en base a si posee errores o no 
    // habilita o deshabilita el submit

    console.log('inputErros', inputErros)
    console.log('input', input)


    const [disable, setDisable] = useState(true);
    console.log('disable', disable)

    useEffect(() => {
        console.log('useEffect')
        if(Object.keys(inputErros).length === 0 && input.firstName) setDisable(false);
        else setDisable(true);
    })

    return (
        <button
            type="submit"
            disabled = {disable}
            className={disable? style.bttndisabled: style.bttnsubmit}
        >Submit</button>
    )
}

export default FormBttn;