import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

// import FormBttn from "../Common/FormBttn/FormBttn";
// import InputText from '../Common/InputText/InputText';

import logo from '../../assets/images/logotipo.png';
import style from './Contact.module.css';

const validator = (input) => {
    // console.log(input)
    let errors = {};
    let testEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    if(!input.email) errors.email = 'Enter your email';
    else if(!testEmail.test(input.email)) errors.email = 'Please enter a valid email'
    if (!input.name) {
        errors.name = 'Name is require!';
    } 
    else if (input.name.length > 40){
        errors.name = 'Up to 40 characters!'
    }
    if (!input.subject) {
        errors.subject = 'Subject is require!';
    } 
    else if (input.subject.length > 40){
        errors.subject = 'Up to 40 characters!'
    }
    if (!input.comments) {
        errors.comments = 'Comments are require!';
    }
   
    return errors;
}

export default function Contact(){
    const navigate = useNavigate();

    //Info del Usuario:
    const [input, setInput] = useState({
        name:'',
        email:'',
        subject:'',
        comments:'',
    });

    //Guardo posibles errores:
    const [errors, setErrors] = useState({});

    //Handle que almacena en input lo que introduce el usuario:
    const handleChange = (e) => {
        // console.log(errors)
        const result = validator({...input, [e.target.name]: e.target.value});
        setInput ({...input, [e.target.name]: e.target.value});
        setErrors(result);
    }

    //Handle para que el usuario pueda ingresar:
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.name ==="" || input.email ==="" || input.subject ==="" || input.comments ===""){
            Swal.fire({
                icon: 'error',
                title: 'you need to fill all the fields...',
                text: 'Something went wrong!',
                confirmButtonText: 'Ok'
              })
              return
        }else{
            console.log("Este es el mensaje enviado")
            console.log(input)
            Swal.fire({ title: 'Success!', 
                text: 'Comments sent successfully!', 
                icon: 'success', 
                confirmButtonText: 'Ok'
    })
        navigate("/")
        }
    }

    return(
    <div className={style.pageContainner}>
        <div className={style.logoContainner}>
            <Link className={style.linkhome} to="/"><img src={logo} className={style.logo} alt={logo}/></Link>
        </div>
        <div className={style.formContainner}>
            
                <h1 className={style.titleForm}>Hello, leave us your comments, they are very important to us. </h1>
                <form className={style.formContent} onSubmit={handleSubmit}>

                    {/* Name */}
                    <input
                        className={style.input} 
                        name='name' 
                        type='text' 
                        placeholder='Name' 
                        onChange={handleChange} 
                    />
                    {errors.name?<div className={style.error}>{errors.name}</div>:null}

                    {/* Email */}
                    <input 
                    className={style.input}
                        name='email' 
                        type='email' 
                        placeholder='Email' 
                        onChange={handleChange}  
                    />
                    {errors.email?<div className={style.error}>{errors.email}</div>:null}
                    
                    {/* subject */}
                    <input 
                    className={style.input}
                        name='subject' 
                        type='text' 
                        placeholder='Subject, example, congratulations, comment, complaint' 
                        onChange={handleChange}  
                    />
                      {errors.subject?<div className={style.error}>{errors.subject}</div>:null} 

                    {/* Comments */}
                    <textarea 
                    className={style.textarea}
                        name='comments' 
                        type='textarea' 
                        rows='5'
                        cols='54'
                        placeholder='Detail your topic here, complaint' 
                        onChange={handleChange}  
                        // errors={errors} 
                        // inputNext='password' 
                        // inputState={input} 
                    />
                     {errors.comments?<div className={style.error}>{errors.comments}</div>:null}
                   
                    {/* Submit */}
                    <button type="submit" className={(input.name ==="" || input.email ==="" || input.subject ==="" || input.comments ==="" ) ?style.buttonDisabled:style.button} disabled={(input.name ==="" || input.description ==="" || input.genreId ==="") ? true:false}> Send </button>

                    <button className={style.button2} onClick={()=> navigate("/")}>Cancel </button>
                </form>
        </div>
        <div className={style.copyright}>
                <p>Copyright © 2022 Grupo 2 Cohorte 22b de Henry</p>
            </div>
    </div>
    )
}
