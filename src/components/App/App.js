import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import useToken from './useToken';
import AppHeader from './AppHeader';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '../Navigation/Sidebar';



function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <div>
      <AppHeader/>
      <div className='App'>
      <Sidebar/>
      <div className = "wrapper">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Dashboard/>}/>
            <Route path = "/preferences" element={<Preferences />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    </div>
    
  );
}

export default App;
