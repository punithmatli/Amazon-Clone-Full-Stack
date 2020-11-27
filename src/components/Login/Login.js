import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <Link to="/">
                <img
                    src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                    className="login__logo"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h2>Sign In</h2>
                <form>
                    <h6>Email</h6>
                    <input type="email" />
                    <h6>Password</h6>
                    <input type="password" />
                    <button type="submit" className="login__signInButton">Submit</button>
                </form>
                <p>By clicking on SignIn, you agree to Amazon Clone's terms and conditions. Please see our privacy notice, cookies notice, interest-based ads notice</p>
                <button className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login