import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Store from './views/Store/Store';
import Profile from './views/Profile/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/store' element={ <Store /> } />
        <Route path='/profile' element={ <Profile /> } />
      </Routes>

    </>
  );
}

export default App;
