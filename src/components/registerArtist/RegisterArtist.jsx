import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import actionsCreator from '../../redux/actions';

//CSS
import s from './RegisterArtist.module.css'
import logo from '../../assets/images/logotipo.png'

const ArtistForm = () => {
    const dispatch = useDispatch();
    const { postArtist } = actionsCreator;
    const navigate = useNavigate()

    const user = useSelector((state) => state.user);
    const toekn = useSelector((state) => state.token);
    const autherr = useSelector((state) => state.authError);
    const [input, setInput] = useState({
        name: '',
        description: '',
    });

    const [inputErrores, setInputErrores] = useState({});

    const inputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        const result = validar({...input, [event.target.name]: event.target.value});
        setInput({...input, [event.target.name]: event.target.value});
        setInputErrores(result);
    }

    const validar = input => {
        let errors = {};
        if (!input.name) errors.name = 'You can not leave the name of the artist empty';
        if (input.name.length < 4) errors.name = 'Enter a valid name';
        return errors;
    }

    const onSubmit = (event) => {
        // console.log('Se fue el input')
        event.preventDefault();
        dispatch(postArtist(input));
    }

    return(
        <div className={s.container}>
        <div className={s.header}><img src={logo} className={s.imagen} alt={logo}/></div>
                <div className={s.containerForm}>
                    <h2>Artist Registration Form</h2>
                    <form onSubmit={onSubmit}>

                        {/* Name*/}
                        <div className={s.label}>
                            <label name="name">Artist Name</label>
                            <input type="text" name="name"  value={input.name} onChange={inputChange} />
                            {inputErrores.name ? <div className="form-text text-danger text-end">{inputErrores.name}</div> : null}
                        </div>

                         {/* Description*/}
                         <div className={s.label}>
                            <label name="description">Artist description</label>
                            <input type="text" name="description" value={input.description} onChange={inputChange}/>
                            {/* {inputErrores.description?<div className="form-text text-danger text-end">{inputErrores.description}</div>:null} */}
                        </div>

                        {/* submit */}
                        <div className={s.bttns} >
                        {autherr ? <div>{autherr}</div> : null}
                            <button type="submit" className={`${s.btn} ${Object.keys(inputErrores).length !== 0 || input.name === '' ? 'disabled' : null}`}>Enviar</button>
                            <button className={s.btn2} onClick={()=>{navigate('/');}}>Cancelar</button>
                        </div>
                    </form>
                </div>
                <div className={s.copyright}>
                <p>Copyright © 2022 Grupo 2 Cohorte 22b de Henry</p>
            </div>
            
        </div>
    )
}

export default ArtistForm;