import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import actionsCreator from '../../redux/actions';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
import FormBttn from '../Common/FormBttn/FormBttn';

//CSS
import s from './RegisterArtist.module.css'
import logo from '../../assets/images/logotipo.png'
// import {IoMdSend} from "react-icons/io"; 

const ArtistForm = ({onClose}) => {
    const dispatch = useDispatch();
    const { postArtist, getGenres} = actionsCreator;
    const navigate = useNavigate()

    // const user = useSelector((state) => state.user);
    // const token = useSelector((state) => state.token);
    // const autherr = useSelector((state) => state.authError);
    const genres = useSelector((state) => state.genres);

    const [input, setInput] = useState({
        name: '',
        description: '',
        genreId:''
    });

    const [inputErrores, setInputErrores] = useState({
        name: 'You can not leave the name of the artist empty',
        description: 'you need a description of at least 20 characters',
        genreId:'Select a genre'
    });

    useEffect(()=>{
        dispatch(getGenres());

    },[dispatch,getGenres])

    const inputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        const result = validar({...input, [event.target.name]: event.target.value});
        setInput({...input, [event.target.name]: event.target.value});
        setInputErrores(result);
    }
    
    const onSelectChange = (event) => {
        // console.log(event.target.value)
        const resultado = validar({...input, genreId: event.target.value})
        setInput({...input, genreId: event.target.value});
        setInputErrores(resultado);
    }

    const validar = input => {
        let errors = {};
        // console.log(input)
        // variable?variable:errors.name = 'You can not leave the name of the artist empty'
        if (input.name.length < 4) errors.name = 'Enter a valid name' 
        else errors.name = "" ;
        // if (input.name.length === 0) errors.name = 'You can not leave the name of the artist empty';
        if (input.description.length < 10) errors.description = 'you need a description of at least 10 characters';
        if(input.genreId==='') errors.genreId = "Select a genre"
        return errors;
    }

    const onSubmit = (event) => {
        // console.log('Se fue el input')
        // console.log(input)
        event.preventDefault();

        if(input.name ==="" || input.description ==="" || input.genreId ===""){
            Swal.fire({
                icon: 'error',
                title: 'you need to fill all the fields...',
                text: 'Something went wrong!',
                confirmButtonText: 'Ok'
              })
              return
        }

        dispatch(postArtist(input));
        Swal.fire({ title: 'Success!', 
                text: 'Artist create succesful!', 
                icon: 'success', 
                confirmButtonText: 'Ok'
    })
    setInput({
        name: '',
        description: '',
    });
        document.getElementById('seleccion').value=""
    }

    return ReactDOM.createPortal(
    //   <div className={s.container}>
    //     <div className={s.header}>
    //       <img src={logo} className={s.imagen} alt={logo} />
    //     </div>
        <div className={s.container}>
          <p className={s.title}>Artist Registration Form</p>
          <form onSubmit={onSubmit}>

            {/* Name*/}
            <p>
              {/* <label name="name">Artist Name</label> */}
              <input type="text" className={s.input} name="name" id="name" value={input.name} onChange={inputChange} placeholder="Artist Name"/>
              {inputErrores.name ? <div className={s.error}>
                  {inputErrores.name}</div> : null}
            </p>

            {/* Description*/}
            <p>
              {/* <label name="description">Artist description</label> */}
              <input type="text" className={s.input} name="description" value={input.description} onChange={inputChange} placeholder="Artist Description"/>{inputErrores.description?<div className={s.error}>{inputErrores.description}</div>:null}
            </p>

            {/* Genero*/}
            <p>
              {/* <label>Genre</label> */}
              <select id="seleccion" className={s.input} onChange={onSelectChange}>
              <option  value="">Genre</option>
              {genres?.map((genre) => {
                  return <option key={genre.id} value={genre.id}>{genre.genreName}</option>
              })}
              </select>
              {inputErrores.genreId?<div className={s.error}>{inputErrores.genreId}</div>:null}
            </p>

            {/* Button submit */}
            
              {/* {autherr ? <div>{autherr}</div> : null} */}
              <button type="submit" className={(input.name ==="" || input.description ==="" || input.genreId ==="") ?s.buttonDisabled:s.button} disabled={(input.name ==="" || input.description ==="" || input.genreId ==="") ? true:false}> Send </button>

              <button className={s.button2} onClick={onClose}>Cancel </button>
            
          </form>
        </div>,       
    document.getElementById('portal'));
}

export default ArtistForm;

 {/* <div className={s.copyright}>
          <p>Copyright © 2022 Grupo 2 Cohorte 22b de Henry</p>
        </div> */}
      {/* </div>, */}