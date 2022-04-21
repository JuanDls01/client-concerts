import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import actionsCreator from '../../redux/actions';
import ReactDOM from "react-dom";
import sendEmailRegister from '../../redux/actions/sendEmailRegister';
import Swal from 'sweetalert2';

// Common Components:
import FormBttn from '../Common/FormBttn/FormBttn';
import InputText from '../Common/InputText/InputText';
import ExitBttnForm from '../Common/ExitBttnForm/ExitBttnForm';

import style from './RegisterForm.module.css';
import logo from '../../assets/images/logotipo.png';

const sweetAlert = () => {
    let timerInterval
    return (
    Swal.fire({
    title: 'Auto close alert!',
    html: 'User created Successfully',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    }))
}

const RegisterForm = ({closeRegisterModal}) => {
    const dispatch = useDispatch();
    const { registerUser, clearAuthError } = actionsCreator;
    const navigate = useNavigate();

    // const user = useSelector((state) => state.user);
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
        dispatch(clearAuthError())
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
        var dataMail={
            name:input.firstName,
            email:input.email
        }
        dispatch(sendEmailRegister(dataMail))
        // if(!autherr) navigate('/register/success');
    }

    //componentWillUnmount
    useEffect(() => {
        dispatch(clearAuthError())
        return () => {
            dispatch(clearAuthError());
        };
    }, []);

    return ReactDOM.createPortal(
        <div className={style.formContainner}>
            {/* <div className="col-4"></div>
            <div className="col-4"> */}
            <ExitBttnForm onClose={closeRegisterModal} />
            <h1 className={style.titleForm}>Complete the form to create an account...</h1>
            <form className={style.formContent} onSubmit={onSubmitHandler}>

                {/* firstName */}
                <InputText 
                    name='firstName' 
                    // type='text' 
                    placeholder='First Name' 
                    handleChange={handleChangeInput} 
                    errors={inputErros} 
                    inputNext='lastName' 
                    inputState={input} 
                />

                {/* lastName */}
                <InputText 
                    name="lastName" 
                    // type='text' 
                    placeholder='Last Name' 
                    handleChange={handleChangeInput} 
                    errors={inputErros} 
                    inputNext='phone' 
                    inputState={input} 
                />

                {/* phone */}
                <InputText 
                    name="phone" 
                    // type='text' 
                    placeholder='Phone Number' 
                    handleChange={handleChangeInput} 
                    errors={inputErros} 
                    inputNext='email' 
                    inputState={input} 
                />

                {/* email */}
                <InputText 
                    name="email" 
                    type='email' 
                    placeholder='Email' 
                    handleChange={handleChangeInput} 
                    errors={inputErros} 
                    inputNext='password' 
                    inputState={input} 
                />

                {/* password */}
                <InputText 
                    name="password" 
                    type='password' 
                    placeholder='Password' 
                    handleChange={handleChangeInput} 
                    errors={inputErros} 
                    inputNext='confirmPassword' 
                    inputState={input} 
                />

                {/* confirmedPassword */}
                <InputText 
                    name="confirmPassword" 
                    type='password' 
                    placeholder='Confirmar Password' 
                    handleChange={handleChangeInput} 
                    errors={inputErros} 
                    inputNext='firstName' 
                    inputState={input} 
                />

                {/* submit */}
                {autherr ? <div className={style.authError}>{autherr}</div> : null}
                
                <FormBttn 
                    firstValue={input.firstName}
                    inputErros={inputErros}
                    text={'Submit'}
                />
            </form>
            {/* </div> */}
            {/* <div className="col-4"></div> */}
        </div>
        ,
        document.getElementById('portal')
    )
}

export default RegisterForm;