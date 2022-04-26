import React, { useState } from 'react'
import { FaStoreAlt } from "react-icons/fa";
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className="login">
                <Link to="/" style={{ textDecoration: "none"}}>
                    <div className="login_logo">
                        <FaStoreAlt className="login_logoImage" />
                        <h2 className="login_logoTitle">SHOP24</h2>
                    </div>
                </Link>

                <div className="login_container">
                    <h1>Sign-in</h1>

                    <form action="">
                        <h5>E-mail</h5>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                        <h5>Password</h5>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </form>

                    <p>
                        By signing-in you agree to the shop24 condition and terms of use. Please
                        see out privacy notice to see how we use cookies and get the best from us
                    </p>

                    <button className="login_registerButton">
                        Create your Account
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login