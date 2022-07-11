import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from '../../components/NavBar'
import './Profile.css'
import api from "../../api/api";
import { config } from "process";

export default function Profile() {
    const [data, setData] = useState<any['products']>([])
    const [userId, setUserId] = useState()
    const userSession = localStorage.getItem('user')
    const email = localStorage.getItem('email')

    useEffect(() => {
        api.get("/products")
            .then((response) => setData(response.data))
            .catch((err) => {
                console.error(err)
            })
    }, [setData])

    useEffect(() => {
        api.get('/auth/login', {params: {
            email
        }}).then(response => setUserId(response.data))
    }, [])



    if (userSession != '') {
        return (
            <>
                <Navbar />
                <section className="userProfile">
                    <h1>Welcome!</h1>
                    <h4>All your items are listed down below</h4>
                </section>

                <section className="item_listing">
                    {data.map((item, index) => (
                        <div className="item_props" key={item.id}>
                            <h2>{item.name}</h2>
                            <h3>${item.price}</h3>
                            <h4>{item.description}</h4>


                        </div>
                    ))}
                </section>
                <Footer />
            </>

        )
    }

    return (
        <>
            <Navbar />
            <section className="profileLoginFail">
                <h1>You're not logged in</h1>
                <h1>{":("}</h1>
            </section>
            <Footer />
        </>
    )
}