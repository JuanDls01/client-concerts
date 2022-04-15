import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getNameEvent, getNameStage, getNameArtist} from '../../redux/actions'
import style from '../components/SearchBars.module.css'


export default function SearchBars() {
    const dispatch = useDispatch();
    const [nameEvent, setNameEvent] = useState('');
    const [nameStage, setNameStage] = useState('');
    const [nameArtist, setNameArtist] = useState('')
    
    const handleInputNameChange = (e) => {
        e.preventDefault();
        setNameEvent(e.target.value)
    }

    const handleInputPlaceChange = (e) => {
        e.preventDefault();
        setNameStage(e.target.value)
    }

    const handleInputArtistChange = (e) => {
        e.preventDefault();
        setNameArtist(e.target.value)
    }
    
    const handleSubmitEvent = (e) => {
        e.preventDefault();
        dispatch(getNameEvent(nameEvent));
        setNameEvent('');
    }
    
    const handleSubmitPlace = (e) => {
        e.preventDefault();
        dispatch(getNameStage(nameStage));
        setNameStage('');
    }
    
    const handleSubmitArtist = (e) => {
        e.preventDefault();
        dispatch(getNameArtist(nameArtist));
        setNameArtist('');
    }

        return (
            <div className={style.searchBox}>
                <div className={style.searches}>
                <div className={style.searchEvent}>
                    <button className={style.button} type='submit' onClick={handleSubmitEvent}>Search Event...</button>
                    <input className={style.input} type='search' placeholder="Enter the event..." onChange={handleInputNameChange} value={nameEvent}/>
                </div>
                <div className={style.searchStage}>
                    <button className={style.button} type='submit' onClick={handleSubmitPlace}>Search Stage...</button>
                    <input className={style.input} type='search' placeholder="Enter the stage..." onChange={handleInputPlaceChange} value={nameStage}/>
                    
                </div>
                <div className={style.searchArtist}>
                    <button className={style.button} type='submit' onClick={handleSubmitArtist}>Search Artist...</button>
                    <input className={style.input} type='search' placeholder="Enter the artist..." onChange={handleInputArtistChange} value={nameArtist}/>
                </div>
                </div>
            </div>
        )
    }
