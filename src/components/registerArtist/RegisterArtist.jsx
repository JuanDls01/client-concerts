import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionsCreator from '../../redux/actions';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
// import FormBttn from '../Common/FormBttn/FormBttn';
import useRoleProtected from '../Hooks/useRoleProtected';

//CSS
import s from './RegisterArtist.module.css'
// import logo from '../../assets/images/logotipo.png'


const ArtistForm = ({onClose}) => {
    // useRoleProtected('vendedor');
    const dispatch = useDispatch();
    const { postArtist, getGenres} = actionsCreator;

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
        const result = validar({...input, [event.target.name]: event.target.value});
        setInput({...input, [event.target.name]: event.target.value});
        setInputErrores(result);
    }
    
    const onSelectChange = (event) => {
        const resultado = validar({...input, genreId: event.target.value})
        setInput({...input, genreId: event.target.value});
        setInputErrores(resultado);
    }

    const validar = input => {
        let errors = {};
        if (input.name.length < 4) errors.name = 'Enter a valid name' 
        else errors.name = "" ;
        if (input.description.length < 10) errors.description = 'you need a description of at least 10 characters';
        if(input.genreId==='') errors.genreId = "Select a genre"
        return errors;
    }

    const onSubmit = (event) => {
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
        document.getElementById('seleccion').value="";
        onClose();
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          onClose()
        }
      })

    return ReactDOM.createPortal(
    //   <div className={s.container}>
    //     <div className={s.header}>
    //       <img src={logo} className={s.imagen} alt={logo} />
    //     </div>
        <div className={s.overlay} >
        <div className={s.container}>
          <p className={s.title}>Artist Registration Form</p>
          <form onSubmit={onSubmit}>

            {/* Name*/}
            <p>
              {/* <label name="name">Artist Name</label> */}
              <input type="text" className={s.input} name="name" id="name" value={input.name} onChange={inputChange} placeholder="Artist Name..."/>
              {inputErrores.name ? <div className={s.error}>
                  {inputErrores.name}</div> : null}
            </p>

            {/* Description*/}
            <p>
              {/* <label name="description">Artist description</label> */}
              <input type="text" className={s.input} name="description" value={input.description} onChange={inputChange} placeholder="Artist Description..."/>{inputErrores.description?<div className={s.error}>{inputErrores.description}</div>:null}
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
            
              <button type="submit" className={(input.name ==="" || input.description ==="" || input.genreId ==="") ?s.buttonDisabled:s.button} disabled={(input.name ==="" || input.description ==="" || input.genreId ==="") ? true:false}> Send </button>

              <button className={s.button2} onClick={onClose}>Close</button>
            
          </form>
        </div>
        </div>,   
    document.getElementById('portal'));
}

export default ArtistForm;

       