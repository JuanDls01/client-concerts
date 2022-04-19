import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import actionsCreator from "../../redux/actions";
import { useCookies } from "react-cookie";

import logo from '../../assets/images/logotipo.png';
import style from './Login.module.css';

const validator = (input) => {
    let errors = {};
    let testEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(!input.email) errors.email = 'Enter your email';
    else if(!testEmail.test(input.email)) errors.email = 'Please enter a valid email'
    if (!input.password) errors.password = 'Enter your password';
    else if (input.password.length < 8) errors.password = 'La contraseña debe contener 8 digitos minimo';
    else if (input.password.length > 20) errors.password = 'La contraseña debe contener 20 digitos maximo';
    // Errors: Email y contraseña no coinciden
    return errors;
}

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const autherr = useSelector((state) => state.authError);
    const navigate = useNavigate();

    const { loginUser, clearAuthError } = actionsCreator;
    const [ cookies, setCookie ] = useCookies(['token']);

    //componentDidMount
    useEffect(() => {
        return () => {
            dispatch(clearAuthError());
        };
    }, []);

    useEffect(() => {
        if(token !== '') {
            setCookie('token', token, { path: '/' });
            navigate('/');
        }
    }, [token]);

    //Info del Usuario:
    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    //Guardo posibles errores:
    const [errors, setErrors] = useState({});

    //Handle que almacena en input lo que introduce el usuario:
    const handleChange = (e) => {
        const result = validator({...input, [e.target.name]: e.target.value});
        setInput ({...input, [e.target.name]: e.target.value});
        setErrors(result);
    }

    //Handle para que el usuario pueda ingresar:
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('inputHandleSubmit', input);
        dispatch(loginUser(input));
    }

    return(
    <div>
        <div className={style.logoContainner}>
            <img src={logo} className={style.logo}/>
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
                        {/* <button className="disabled">Login with FB</button>
                        <button>Login with Gmail</button> */}
                    </div>
                    <div>
                        {autherr ? <div>{autherr}</div> : null}
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