/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import actionsCreator from '../../redux/actions';
import style from './CreateStage.module.css';
import Swal from 'sweetalert2';
import FormBttn from '../Common/FormBttn/FormBttn';

const { postStage } = actionsCreator;

const validateInput = (input) => {
  let errors = {};
  if (!input.name) {
      errors.name = 'Name is require!';
  } 
  else if (input.name.length > 40){
      errors.name = 'Up to 40 characters!'
  }
  
  if (!input.capacity) {
      errors.capacity = 'Capacity is require!'
  }
  else if (!/^[0-9]+([.])?([0-9]+)?$/.test(input.capacity)){
      errors.capacity = 'Only numbers!'
  }
  
  if (!input.address) {
      errors.address = 'Address is require!'
  }
  else if (input.address.length > 50){
    errors.address = 'Up to 50 characters!'
  }
  
  if (!/^[-]?\d+[.]?\d*?|(^$)$/.test(input.lat)){
    errors.lat = 'Only numbers!'
  }
  else if(input.lat < -90 || input.lat > 90){
      errors.lat = 'Range must be between -90 and 90!'
  }

  if (!/^[-]?\d+[.]?\d*?|(^$)$/.test(input.lon)){
    errors.lon = 'Only numbers!'
  }
  else if(input.lon < -180 || input.lon > 180){
      errors.lon = 'Range must be between -180 and 180!'
  }
  return errors;
}

export const CreateStage = ({ onClose }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    capacity: "",
    address: "",
    lat: "",
    lon: "",
    description: ""
  });

  useEffect(() => {
    document.getElementById('inputName').focus();
  }, [])

  const handleChange = (e) => {
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setErrors(validateInput({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postStage(input))
    Swal.fire({ title: 'Success!', 
                text: 'Stage create succesful!', 
                icon: 'success', 
                confirmButtonText: 'Ok'
    })
    setInput({
      name: "",
      capacity: "",
      address: "",
      lat: "",
      lon: "",
      description: "",
    })
  }

  const nextFocus = (inputF, inputS) => {
    document.getElementById(inputF).addEventListener('keydown', (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById(inputS).focus();
        event.preventDefault();
      }
    })
  }

  return ReactDOM.createPortal (
    <div className={style.container}>
    <p className={style.title}>Add a new Stage</p>
    <form onSubmit={(e) => handleSubmit(e)}>
      <p><input placeholder='Name...' className={style.input} type="text" value={input.name} name="name" onChange={handleChange} id="inputName" onKeyDown={() => nextFocus('inputName', 'inputCapacity')}/></p>
          {errors.name && <p className={style.error}>{errors.name}</p>}
      <p><input placeholder='Capacity...' className={style.input} type="number" value={input.capacity} name="capacity" onChange={handleChange} id="inputCapacity" onKeyDown={() => nextFocus('inputCapacity', 'inputAddress')}/></p>
          {errors.capacity && <p className={style.error}>{errors.capacity}</p>}
      <p><input placeholder='Address...' className={style.input} type="text" value={input.address} name="address" onChange={handleChange} id="inputAddress" onKeyDown={() => nextFocus('inputAddress', 'inputLat')}/></p>
          {errors.address && <p className={style.error}>{errors.address}</p>}
      <p><input placeholder='Coordinates(Lat)...' className={style.input}type="text" value={input.lat} name="lat" onChange={handleChange} id="inputLat" onKeyDown={() => nextFocus('inputLat', 'inputLon')}/></p>
          {errors.lat && <p className={style.error}>{errors.lat}</p>}
      <p><input placeholder='Coordinates(Lon)...' className={style.input} type="text" value={input.lon} name="lon" onChange={handleChange} id="inputLon" onKeyDown={() => nextFocus('inputLon', 'inputDescription')}/></p>
          {errors.lon && <p className={style.error}>{errors.lon}</p>}
      <p><textarea placeholder='Description...' rows="5" className={style.textarea} value={input.description} name="description" onChange={handleChange} id="inputDescription"/></p>
      {/* <button
        className={style.button}
        type="submit"
        disabled={
            !input.name || !input.capacity || !input.address || errors.name || errors.capacity || errors.address || errors.lat || errors.lon ? true : false
        }>Create!
      </button> */}
      <FormBttn
        firstValue={input.name}
        inputErros={errors}
        text={'Create!'}
      />
      <button type="button" className={style.button} onClick={onClose}>Close</button>
    </form>
    </div>, 
    document.getElementById('portal'))
}
