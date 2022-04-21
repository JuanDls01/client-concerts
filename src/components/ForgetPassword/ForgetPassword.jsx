import FormBttn from "../Common/FormBttn/FormBttn";
import InputText from "../Common/InputText/InputText";
import React from "react";
import { useState } from "react";
import sendEmailRecover from "../../redux/actions/sendEmailRecover";
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
    setEmail({...input,email:e.target.value});
    setErr(validate(input.email));

  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(sendEmailRecover(input.email));
  }

  return (
    <div className={style.contenedor}>
      <form onSubmit={(e)=>handleSubmit(e)}>
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
