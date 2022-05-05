/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import actionsCreator from '../../redux/actions';
import style from './CreateStage.module.css';
import Swal from 'sweetalert2';
import FormBttn from '../Common/FormBttn/FormBttn';
import InputText from '../Common/InputText/InputText';
import MapContainer from "../MapContainer/MapContainer";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import scriptLoader from 'react-async-script-loader';

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

const CreateStage = ({ closeStageModal, isScriptLoaded, isScriptLoadSucceed }) => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    capacity: "",
    address: "",
    lat: "",
    lon: "",
    description: ""
  });

  const handleSelect = async (place) => {
    let results = await geocodeByAddress(place);
    let latLng = await getLatLng(results[0]);
    setAddress(place);
    console.log(results[0].formatted_address)
    console.log(latLng.lat, latLng.lng)
    setInput({
      ...input,
      address: results[0].formatted_address,
      lat: latLng.lat,
      lon: latLng.lng
    })
    setErrors(validateInput({
      ...input,
      address: results[0].formatted_address
    }))
  }

  const handleAddressChange = (place) => {
    setAddress(place)
    
    setErrors(validateInput(
      {
        ...input,
      address: input.address   
      }
    ))
    
  }

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
    Swal.fire({ 
      title: 'Success!', 
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
    closeStageModal();
  }
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeStageModal()
    }
  })

  // const nextFocus = (inputF, inputS) => {
  //   document.getElementById(inputF).addEventListener('keydown', (event) => {
  //     if (event.key === "Enter") {
  //       event.preventDefault();
  //       document.getElementById(inputS).focus();
  //       event.preventDefault();
  //     }
  //   })
  // }
  if (isScriptLoaded && isScriptLoadSucceed) {
  return ReactDOM.createPortal (
    <div className={style.overlay}>
    <div className={style.container}>
    <p className={style.title}>Add a new Stage</p>
    <form onSubmit={handleSubmit}>
      <InputText 
        name='name' 
        type='text' 
        placeholder='Name...' 
        handleChange={handleChange} 
        errors={errors} 
        inputNext='capacity' 
        inputState={input} 
        autoFocus
      />
      <InputText 
        type='number'
        name='capacity' 
        placeholder='Capacity...'
        inputState={input}
        handleChange={handleChange} 
        errors={errors} 
        inputNext='address'
      />
      <p><PlacesAutocomplete 
          value={address} 
          onChange={handleAddressChange} 
          onSelect={handleSelect}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input 
              {...getInputProps({
                id: 'address',
                name: 'address',
                placeholder: 'Search Places...',
                type: 'text',
                className: style.input,
              })}
            />
            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const style = suggestion.active ? 
                { backgroundColor: "#a83225", cursor: "pointer" } :
                { backgroundColor: "#ffffff", cursor: "pointer" }
                return (
                  <div {...getSuggestionItemProps(suggestion, {style})}>
                    {suggestion.description}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete></p>
      {errors.address && <p className={style.error}>{errors.address}</p>}
      <p><input type="text" hidden value={input.lat} name="lat" onChange={handleChange} id="lat" /></p>
          {errors.lat && <p className={style.error}>{errors.lat}</p>}
      <p><input type="text" hidden value={input.lon} name="lon" onChange={handleChange} id="lon" /></p>
          {errors.lon && <p className={style.error}>{errors.lon}</p>}
      <div className={style.map}>
            {input.lat && input.lon ? (
              <MapContainer
                lat={input.lat}
                lon={input.lon}
                marginLeft="0%"
                maxWidth="88%"
                maxHeight="28%"
              />
            ) : (
              <p>Loading map..</p>
            )}
      </div>
      {/* <p><input placeholder='Name...' className={style.input} type="text" value={input.name} name="name" onChange={handleChange} id="inputName" onKeyDown={() => nextFocus('inputName', 'inputCapacity')}/></p>
          {errors.name && <p className={style.error}>{errors.name}</p>}
      <p><input placeholder='Capacity...' className={style.input} type="number" value={input.capacity} name="capacity" onChange={handleChange} id="inputCapacity" onKeyDown={() => nextFocus('inputCapacity', 'inputAddress')}/></p>
          {errors.capacity && <p className={style.error}>{errors.capacity}</p>}
      <p><input placeholder='Address...' className={style.input} type="text" value={input.address} name="address" onChange={handleChange} id="inputAddress" onKeyDown={() => nextFocus('inputAddress', 'inputLat')}/></p>
          {errors.address && <p className={style.error}>{errors.address}</p>}
      <p><input placeholder='Coordinates(Lat)...' className={style.input}type="text" value={input.lat} name="lat" onChange={handleChange} id="inputLat" onKeyDown={() => nextFocus('inputLat', 'inputLon')}/></p>
          {errors.lat && <p className={style.error}>{errors.lat}</p>}
      <p><input placeholder='Coordinates(Lon)...' className={style.input} type="text" value={input.lon} name="lon" onChange={handleChange} id="inputLon" onKeyDown={() => nextFocus('inputLon', 'inputDescription')}/></p>
          {errors.lon && <p className={style.error}>{errors.lon}</p>} */}
      <p><textarea name='description' placeholder='Description...' value={input.description} onChange={handleChange} rows="5" className={style.textarea} id="des"/></p>
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
        text={'Send'}
      />
    <button type="button" className={style.button} onClick={closeStageModal}>Close</button>
    </form>
    </div>
    </div>, 
    document.getElementById('portal'))
  } else {
    return <div></div>;
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`,
])(CreateStage)