import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"; 

import LoginHeader from './LoginHeader';
import './Login.css';
import { PersonFill } from "react-bootstrap-icons"; 


async function loginUser(crendentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(crendentials)
    })
    .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    
    
    
    return(
        <div className='loginPage'>
            <LoginHeader />
            <div className = "loginWrapper">
                
                <PersonFill className='mainIconLogin' size={100} />
                <form onSubmit={handleSubmit}>
                    <label className='loginBox'>
                        <input className = 'inputLogin' type="text" placeholder='Username/Email' onChange={e => setUserName(e.target.value)} >
                        </input>
                    </label>
                    <br></br>
                    <label className='loginBox'>
                        <input className = 'inputLogin' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)}>
                        </input>
                    </label>
                    <br></br>
                    
                    <a className='forgotPasswordLink' href='github.com'>Forgot Password?</a>
                    <div>
                        <button className = 'loginButton' type="submit">
                            LOGIN
                        </button>
                    </div>
                    <div className='line-2'>
                    </div>
                    <div>
                        <button className = 'registerButton' type="submit">
                            REGISTER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}