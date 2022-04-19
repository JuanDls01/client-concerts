import React, { useState } from "react";
import logo from '../../assets/images/logotipo.png';
import { Link } from "react-router-dom";

import style from './Login.module.css';

const validator = (input) => {
    let errors = {};
    let testEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(!input.email) errors.email = 'Enter your email';
    else if(!testEmail.test(input.email)) errors.email = 'Please enter an email'
    if (!input.password) errors.password = 'Enter your password';
    // Errors: Email y contraseña no coinciden
    return errors
}

const Login = () => {

    //Info del Usuario:
    const [input, setInput] = useState({
        email: '',
        password: '',
    })

    //Guardo posibles errores:
    const [errors, setErrors] = useState({})

    //Handle que almacena en input lo que introduce el usuario:
    const handleChange = (e) => {
        setInput ({...input, [e.target.name]: e.target.value});
        setErrors(validator({...input, [e.target.name]: e.target.value}));
    }

    //Handle para que el usuario pueda ingresar:
    const handleSubmit = (e) => {
        console.log('inputHandleSubmit', input)
        // e.preventDefault();
        // console.log(input);
    }

    return(
    <div>
        <div className={style.logoContainner}>
            <img src={logo} className={style.logo} alt={logo}/>
        </div>
        <div className={style.formContainner}>
            <div className={style.formBox}>
                <h3>Hello! To continue, please enter your email and password, or Login via Facebook or Google. </h3>
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={input.email}
                            onChange={handleChange} />
                        {errors.email ? <div>{errors.email}</div> : null}
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={input.password}
                            onChange={handleChange} />
                        {errors.password ? <div >{errors.password}</div> : null}
                    </div>
                    <div>
                        <button>Login with FB</button>
                        <button>Login with Gmail</button>
                    </div>
                    <div>
                        <button type='submit'>Log In</button>
                    </div>
                    <div>
                        <Link to="/register">Register</Link>
                        {/* <button>Register</button> */}
                    </div>

                </form>
            </div>
        </div>
    </div>
    )
}

export default Login;