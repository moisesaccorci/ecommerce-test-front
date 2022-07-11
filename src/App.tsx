import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Store from './views/Store/Store';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';
import ProductForm from './views/ProductForm/ProductForm';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/store' element={ <Store /> } />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/profile/form' element={ <ProductForm /> } />
      </Routes>

    </>
  );
}

export default App;
