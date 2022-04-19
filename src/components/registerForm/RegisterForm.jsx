import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import actionsCreator from '../../redux/actions';
import FormBttn from '../Common/FormBttn/FormBttn';

import style from './RegisterForm.module.css';
import logo from '../../assets/images/logotipo.png';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { registerUser, clearAuthError } = actionsCreator;
    const navigate = useNavigate();

    //componentDidMount
    useEffect(() => {
        return () => {
            dispatch(clearAuthError());
        };
    }, []);

    const user = useSelector((state) => state.user);
    const autherr = useSelector((state) => state.authError);
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [inputErros, setInputErros] = useState({});


    const handleChangeInput = e => {
        const result = validator({...input, [e.target.name]: e.target.value});
        setInput({...input, [e.target.name]: e.target.value});
        setInputErros(result);
    }

    const validator = input => {
        let errors = {};
        if (!input.firstName) errors.firstName = 'El nombre es requerido';
        else if (input.firstName.length < 2) errors.firstName = 'El nombre debe contener 2 caracteres minimo';
        else if (input.firstName.length > 23) errors.firstName = 'El nombre debe contener 23 caracteres maximo';
        else if (input.firstName.match(/^[a-zA-Z ,.'-]+$/) === null) errors.firstName = 'El nombre solo puede contener letras';
        if (!input.lastName) errors.lastName = 'El apellido es requerido';
        else if (input.lastName.length < 2) errors.lastName = 'El apellido debe contener 2 caracteres minimo';
        else if (input.lastName.length > 23) errors.lastName = 'El apellido debe contener 23 caracteres maximo';
        else if (input.lastName.match(/^[a-zA-Z ,.'-]+$/) === null) errors.lastName = 'El apellido solo puede contener letras';
        if (!input.phone) errors.phone = 'El telefono es requerido';
        else if (input.phone.length < 8) errors.phone = 'El telefono debe contener 8 digitos minimo';
        else if (input.phone.length > 15) errors.phone = 'El telefono debe contener 15 digitos maximo';
        if (!input.password) errors.password = 'La contraseña es requerido';
        else if (input.password.length < 8) errors.password = 'La contraseña debe contener 8 digitos minimo';
        else if (input.password.length > 20) errors.password = 'La contraseña debe contener 20 digitos maximo';
        if (!input.confirmPassword) errors.confirmPassword = 'La contraseña debe ser confirmada';
        else if (input.password !== input.confirmPassword) errors.confirmPassword = 'Las contraseñas no coinciden';
        if (!input.email) errors.email = 'El correo es requerido';
        return errors;
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        // console.log(input);
        dispatch(registerUser(input));
        if(!autherr) navigate('/register/success');
    }

    return(
        <div className={style.pageContainner}>
            <div className={style.logoContainner}>
                <img src={logo} className={style.logo} alt={logo}/>
            </div>
            <div className={style.formContainner}>
                {/* <div className="col-4"></div>
                <div className="col-4"> */}
                    <h1 className={style.titleForm}>Complete the form to create an account...</h1>
                    <form className={style.formContent} onSubmit={onSubmitHandler}>

                        {/* firstName */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="Nombre"
                                value={input.firstName}
                                onChange={handleChangeInput} />
                            {inputErros.firstName ? <div className="form-text text-danger text-end">{inputErros.firstName}</div> : null}
                        </div>

                        {/* lastName */}
                        <div className="mb-3">
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="Apellidos"
                                value={input.lastName}
                                onChange={handleChangeInput} />
                            {inputErros.lastName ? <div className="form-text text-danger text-end">{inputErros.lastName}</div> : null}
                        </div>

                        {/* phone */}
                        <div className="mb-3">
                            <input 
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Telefono"
                                value={input.phone}
                                onChange={handleChangeInput} />
                            {inputErros.phone ? <div className="form-text text-danger text-end">{inputErros.phone}</div> : null}
                        </div>

                        {/* email */}
                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                value={input.email}
                                onChange={handleChangeInput} />
                            {inputErros.email ? <div className="form-text text-danger text-end">{inputErros.email}</div> : null}
                        </div>

                        {/* password */}
                        <div className="mb-3">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                value={input.password}
                                onChange={handleChangeInput} />
                            {inputErros.password ? <div className="form-text text-danger text-end">{inputErros.password}</div> : null}
                        </div>

                        {/* confirmedPassword */}
                        <div className="mb-3">
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirmar Password"
                                value={input.confirmPassword}
                                onChange={handleChangeInput} />
                            {inputErros.confirmPassword ? <div className="form-text text-danger text-end">{inputErros.confirmPassword}</div> : null}
                        </div>

                        {/* submit */}
                        {autherr ? <div className="form-text text-danger text-end">{autherr}</div> : null}
                        
                        <FormBttn 
                            firstValue={input.firstName}
                            inputErros={inputErros}
                            text={'Submit'}
                        />
                    </form>
                {/* </div> */}
                {/* <div className="col-4"></div> */}
            </div>
        </div>
    )
}

export default RegisterForm;