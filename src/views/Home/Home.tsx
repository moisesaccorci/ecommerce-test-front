import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import './Home.css'
import axios from "axios";
import api from '../../api/api'
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
export default function Home() {
    const [user, setUser] = useState('')

    return (
        <>
        <Navbar />

            <section className="hero">
                <h1>AMAZING STORE FOR AMAZING PEOPLE</h1>
            </section>

            <Footer />

        </>
    )
}