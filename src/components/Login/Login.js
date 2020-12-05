import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { auth } from '../../firebase';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/');
        })
        .catch(err => {
            alert(err.message);
        })

    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth);
                if (auth) { history.push('/'); }
            })
            .catch(err => {
                console.log(err);
                alert(err.message);
            })
    }

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
                <form onSubmit={signIn}>
                    <h6>Email</h6>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h6>Password</h6>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By clicking on SignIn, you agree to Amazon Clone's terms and conditions. Please see our privacy notice, cookies notice, interest-based ads notice</p>
                <button onClick={register} className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login