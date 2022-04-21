import FormBttn from "../Common/FormBttn/FormBttn";
import InputText from "../Common/InputText/InputText";
import React from "react";
import { useState } from "react";
import sendEmailRegister from "../../redux/actions/sendEmailRegister";
import { useDispatch } from "react-redux"
import style from "./ForgetPassword.module.css";


export function validate(email) {
    let errors = {};
    let testEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(!email) errors.email = 'Enter your email';
    else if(!testEmail.test(email)) errors.email = 'Please enter a valid email'
    
    return errors;
}

// {name, type, placeholder, handleChange, errors, inputNext, inputState}
export default function ForgetPassword() {
  const dispatch = useDispatch();
  const [input, setEmail] = useState({
      email:""
  });
  const [err, setErr] = useState({});

  function handleChange(e) {
    e.preventDefault();
    setEmail({...input,email:e.target.value});
    setErr(validate(input.email));
  }
  function handleSubmit() {
    dispatch(sendEmailRegister(input.email));
  }

  return (
    <div className={style.contenedor}>
      <form onSubmit={handleSubmit}>
        <InputText
          name="email"
          type="email"
          placeholder="ingresa tu mail"
          errors={err}
          inputState={input}
          handleChange={handleChange}
        />
        <FormBttn inputErros={err} firstValue= {input.email} text= "Send"/>
      </form>
    </div>
  );
}
