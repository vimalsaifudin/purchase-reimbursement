import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard.js';
import Navbar from './components/Navbar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {

  function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }

  const token = getToken();

    if (!token) {
      return <Login />
    }
    else {
      return (
       <BrowserRouter>
       <Navbar />
      <Dashboard />
      </BrowserRouter>
      )
    }

  

  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
  
  );
}
}


export default App;
