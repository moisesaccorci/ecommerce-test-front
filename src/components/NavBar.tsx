import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../views/Home/Home.css'
export default function Navbar() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 

    const handleLogout = () => {
        localStorage.setItem('user', '');
        localStorage.setItem('email', '')
    };
    const userSession = localStorage.getItem('user')

    if (userSession != '') {
        return (
            <div className="myOwnNav">
                <p className="text-logo">Amazing</p>
                <ul className="big-screen-nav">
                    <li>
                        <Link to={'/'}> <h6 className="pages">Home</h6></Link>
                        <Link to={'/store'}> <h6 className="pages">Store</h6></Link>
                        <Link to={'/'}><a className="primary-button" onClick={handleLogout}>Logout</a></Link>
                    </li>
                </ul>

                <ul className="small-screen-nav">
                    <li><i className="fa-solid fa-bars"></i></li>
                </ul>
            </div>
        )
    }

    return (
        <div className="myOwnNav">
            <p className="text-logo">Amazing</p>
            <ul className="big-screen-nav">
                <li>
                    <Link to={'/'}><h6 className="pages">Home</h6></Link>
                    <Link to={'/store'}><h6 className="pages">Store</h6></Link>
                    <Link to={'/login'}><button className="primary-button">Login</button></Link>
                </li>
            </ul>

            <ul className="small-screen-nav">
                <li><i className="fa-solid fa-bars"></i></li>
            </ul>
        </div>
    )
}