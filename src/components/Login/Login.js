import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

export default function Login(props) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        sessionStorage.setItem('token', JSON.stringify(token));
        window.location.href='/dashboard'
      }

  return(
    <div className="login-form">
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value="user" onChange={e => setUserName(e.target.value)} placeholder="Username" />
        <input type="password" value="user" onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <div>
        <input type="submit" />
      </div>
    </form>
    </div>
  )
}

