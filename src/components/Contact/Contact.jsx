// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export default function Contact ()  {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     console.log(form.current)
//     emailjs.sendForm('service_yjfg1ts', 'template_hayjh9f', form.current, 'veTpopn0-22AcyjQ3')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };



import React, { useState, useRef  } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
// import FormBttn from "../Common/FormBttn/FormBttn";
// import InputText from '../Common/InputText/InputText';

import logo from '../../assets/images/logotipo.png';
import style from './Contact.module.css';

const validator = (input) => {
    // console.log(input)
    let errors = {};
    let testEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    if(!input.user_email) errors.user_email = 'Enter your email';
    else if(!testEmail.test(input.user_email)) errors.user_email = 'Please enter a valid email'
    if (!input.user_name) {
        errors.user_name = 'Name is require!';
    } 
    else if (input.user_name.length > 40){
        errors.name = 'Up to 40 characters!'
    }
    if (!input.user_subject) {
        errors.user_subject = 'Subject is require!';
    } 
    else if (input.user_subject.length > 40){
        errors.user_subject = 'Up to 40 characters!'
    }
    if (!input.message) {
        errors.message = 'Comments are require!';
    }
   
    return errors;
}

export default function Contact(){
    const navigate = useNavigate();
    const form = useRef();

    //Info del Usuario:
    const [input, setInput] = useState({
        user_name:'',
        user_email:'',
        user_subject:'',
        message:'',
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
        console.log("Entro al submit")
        console.log(form.current.user_name)
        if(input.user_name ==="" || input.user_email ==="" || input.user_subject ==="" || input.message ===""){
            Swal.fire({
                icon: 'error',
                title: 'you need to fill all the fields...',
                text: 'Something went wrong!',
                confirmButtonText: 'Ok'
              })
              return
        }else{
            // let data = {
            //     service_id: 'service_yjfg1ts',
            //     template_id: 'template_hayjh9f',
            //     user_id: 'veTpopn0-22AcyjQ3',
            //     template_params: {
            //         'username': input.user_name,
            //         'useremail': input.user_email,
            //         'subject': input.user_subject,
            //         'message': input.message,
            //         'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
            //     }
            // };
            emailjs.sendForm('service_yjfg1ts', 'template_hayjh9f', form.current, 'veTpopn0-22AcyjQ3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

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
                <form ref={form} className={style.formContent} onSubmit={handleSubmit}>

                    {/* Name */}
                    <input
                        className={style.input} 
                        name='user_name' 
                        type='text' 
                        placeholder='Name' 
                        onChange={handleChange}
                        autoFocus
                    />
                    {errors.user_name?<div className={style.error}>{errors.user_name}</div>:null}

                    {/* Email */}
                    <input 
                    className={style.input}
                        name='user_email' 
                        type='email' 
                        placeholder='Email' 
                        onChange={handleChange}  
                    />
                    {errors.user_email?<div className={style.error}>{errors.user_email}</div>:null}
                    
                    {/* subject */}
                    <input 
                    className={style.input}
                        name='user_subject' 
                        type='text' 
                        placeholder='Subject, example, congratulations, comment, complaint' 
                        onChange={handleChange}  
                    />
                      {errors.user_subject?<div className={style.error}>{errors.user_subject}</div>:null} 

                    {/* Comments */}
                    <textarea 
                    className={style.textarea}
                        name='message' 
                        type='textarea' 
                        rows='5'
                        cols='54'
                        placeholder='Detail your topic here, complaint' 
                        onChange={handleChange}  
                        // errors={errors} 
                        // inputNext='password' 
                        // inputState={input} 
                    />
                     {errors.message?<div className={style.error}>{errors.message}</div>:null}
                   
                    {/* Submit */}
                    <button type="submit" className={(input.user_name ==="" || input.user_email ==="" || input.user_subject ==="" || input.message ==="" ) ?style.buttonDisabled:style.button} disabled={(input.user_name ==="" || input.description ==="" || input.genreId ==="") ? true:false}> Send </button>

                    <button className={style.button2} onClick={()=> navigate("/")}>Cancel </button>
                </form>
        </div>
        <div className={style.copyright}>
                <p>Copyright © 2022 Grupo 2 Cohorte 22b de Henry</p>
            </div>
    </div>
    )
}
