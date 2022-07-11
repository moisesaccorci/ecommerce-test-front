import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Items from "../../components/Items";
import Navbar from "../../components/NavBar";
import './Store.css'

export default function Store() {
    const userSession = localStorage.getItem('user')

    if (userSession != '') {
        return (
            <>
                <Navbar />
                <div className="user_welcome">
                    <h4>Welcome to Amazing Store!</h4>
                    <Link to={'/profile'}><h6>My products</h6></Link>
                </div>
                <Items />
                <Footer />

            </>

        )
    }

    return (
        <>
            <Navbar />
            <Items />
            <Footer />
        </>

    )
}