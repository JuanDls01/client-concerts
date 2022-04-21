import React from 'react';
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
    return (
        <div>
            <h1>Registro exitoso</h1>
            <li>
                <Link to="/">Events</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </div>
    )
}

export default RegisterSuccess;