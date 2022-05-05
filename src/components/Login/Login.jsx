import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import actionsCreator from "../../redux/actions";
import { useCookies } from "react-cookie";
// import ReactDOM from "react-dom";
import { BiArrowBack } from 'react-icons/bi';
import { GoogleLogin } from 'react-google-login';

// Common Components:
import FormBttn from "../Common/FormBttn/FormBttn";
import InputText from '../Common/InputText/InputText';
import ExitBttnForm from "../Common/ExitBttnForm/ExitBttnForm";

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
    // const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const autherr = useSelector((state) => state.authError);
    const navigate = useNavigate();

    const { loginUser, clearAuthError, loginGoogle } = actionsCreator;
    const [ cookies, setCookie ] = useCookies(['token']);

    //componentWillUnmount:
    useEffect(() => {
        dispatch(clearAuthError())
        return () => {
            dispatch(clearAuthError());
        };
    }, []);

    useEffect(() => {
        if(token !== '') {
            setCookie('token', token, { path: '/' });
            navigate('/');
            // closeLoginModal()
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
        dispatch(clearAuthError())
    }

    //Handle para que el usuario pueda ingresar:
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('inputHandleSubmit', input);
        dispatch(loginUser(input));
        // if(!autherr){
        //     closeLoginModal()
        // }
    }

    // Para cuando ande Modal
    // const onClickRegister = () => {
    //     closeLoginModal();
    //     openRegisterModal();
    // }

    const responseGoogle = (response) => {
        console.log('response',response);
        const input = {
            googleId: response.profileObj.googleId,
            email: response.profileObj.email,
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName
        }
        console.log(input);
        dispatch(loginGoogle(input))
    }

    return (
        <div className={style.pageContainner}>
            <nav className={style.navegacion}>
                <div className={style.logoContainner}>
                    <img src={logo} className={style.logo} alt={logo}/>
                </div>
            </nav>
            <div className={style.formContainner}>
                <div className={style.bttnContainner}>
                    <Link to='/' className={style.backBttn}><BiArrowBack /></Link>
                </div>
                {/* <ExitBttnForm onClose={navigate} path={'/'} /> */}
                <h1 className={style.titleForm}>Hello! Enter your email and password</h1>
                <form className={style.formContent} onSubmit={handleSubmit}>
                    {/* Email */}
                    <InputText 
                        name='email' 
                        type='email' 
                        placeholder='Email' 
                        handleChange={handleChange} 
                        errors={errors} 
                        inputNext='password' 
                        inputState={input}
                        autoFocus
                    />
                    {/* Password */}
                    <InputText 
                        name='password' 
                        type='password' 
                        placeholder='Password' 
                        handleChange={handleChange} 
                        errors={errors} 
                        inputNext='email' 
                        inputState={input} 
                    />
                    {/* {autherr ? <div className={style.authError}>{autherr}</div> : null} */}
                    {/* INICIAR SESIÓN CON GOOGLE */}
                    <div className={style.googleLogin}>
                        <GoogleLogin
                            clientId="777303769241-ektle3v1dbo31jaj1pfeoaqdfa789o7r.apps.googleusercontent.com"
                            buttonText="Sign In with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                    {/* <button onClick={signWGoogleHandle}>SignIn with Google</button> */}
                    
                    {/* Submit */}
                    <FormBttn 
                        firstValue={input.email}
                        inputErros={errors}
                        text={'Log In'}
                    />
                    <Link to='/register' className={style.registerBttn}>Register</Link>
                    <Link to="/recoverPassword"  className={style.forget}><p >Did you forget your password?</p></Link>
                    {/* Para cuando ande Modal: */}
                    {/* <button onClick={onClickRegister} className={style.registerBttn}>Register</button> */}

                    {/* <div className={style.register}>
                        
                    </div> */}
                </form>
            </div>
        </div>
    // document.getElementById('portal')
    )
}

export default Login;
