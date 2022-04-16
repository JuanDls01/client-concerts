import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionsCreator from '../../redux/actions/index';
import Swal from 'sweetalert2';
import style from '../SearchBars/SearchBars.module.css';
import { BsSearch } from 'react-icons/bs';

const {getNameEvent, getEvents} = actionsCreator;


export default function SearchBars() {
    const dispatch = useDispatch();
    const [nameEvent, setNameEvent] = useState('');
    const [nameArtist, setNameArtist] = useState('');
    const [nameStage, setNameStage] = useState('');
    
    //****CODIGO PARA PRUEBA******//
    const events = useSelector(state => state.events)
    console.log(events)

    useEffect(() => {
      dispatch(getEvents())
    }, [dispatch])
    //****************************//

    const handleInputNameChange = (e) => {
        e.preventDefault();
        setNameEvent(e.target.value)
    }
    
    const handleInputArtistChange = (e) => {
        e.preventDefault();
        setNameArtist(e.target.value)
    }

    const handleInputPlaceChange = (e) => {
        e.preventDefault();
        setNameEvent(e.target.value)
    }

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (nameEvent === '' && nameArtist === '' && nameStage === '') {
            document.getElementById('nameEvent').focus();
            Swal.fire({ title: 'Error!', 
                        text: 'Debe ingresar algo!!!', 
                        icon: 'warning', 
                        confirmButtonText: 'Ok'
            })
        }
        dispatch(getNameEvent(nameEvent, nameArtist, nameStage));
        setNameEvent('');
        setNameArtist('');
        setNameStage('');
    }

    return (
        <div className={style.searchBox}>
             <div className={style.searches}>
                <div className={style.search}>
                    <label className={style.label} >Search Event...</label>
                    <input id="nameEvent" className={style.input} type='search' placeholder="Enter the event..." onChange={handleInputNameChange} value={nameEvent}/>
                </div>
                <div className={style.search}>
                    <label className={style.label} >Search Stage...</label>
                    <input className={style.input} type='search' placeholder="Enter the stage..." onChange={handleInputPlaceChange} value={nameStage}/>
                    
                </div>
                <div className={style.search}>
                    <label className={style.label} >Search Artist...</label>
                    <input className={style.input} type='search' placeholder="Enter the artist..." onChange={handleInputArtistChange} value={nameArtist}/>
                </div>
                <div className={style.searchButton}>
                    <button className={style.button} type='submit' onClick={handleSubmitEvent}><BsSearch className={style.icon}/></button>
                </div>
            </div>
        </div>
    )
    }