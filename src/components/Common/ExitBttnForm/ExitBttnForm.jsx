import style from './ExitBttnForm.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';

const ExitBttnForm = ({onClose}) => {
    // Bttn que cierra formulario modal. Recibe como parámetro la función
    // setCloseModal..

    return (
        <div className={style.bttnContainner}>
            <button onClick={onClose} className={style.bttnClose}><BiArrowBack /></button>
        </div>
    )
}

export default ExitBttnForm;