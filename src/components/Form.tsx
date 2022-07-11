import React, { useState } from "react";
import '../views/Login/Login.css'
import '../styles/bootstrap.css'
import api from "../api/api";
import { Link } from "react-router-dom";

export default function Form() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [advisor, setAdvisor] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = { email, password }
        try {
            const response = await api.post('/auth/login', user)
            localStorage.setItem('user', 'true')
            localStorage.setItem('email', email.toString())
            // console.log('Logged in')
            window.location.href = '/'

        } catch (error: any) {
            setAdvisor(true)
            const message = error.response.data.message
            console.log(message)
        }

    }
    function Advisor() {
        if (advisor) {
            return (
                <h6 className="account-advisor">Wrong email/password</h6>
            )
        }

        return (
            null
        )
    }

    return (
        <>
            <div className="row">
                <div className="col-md">
                    <form onSubmit={handleSubmit}>
                        <div className="sign-in">Sign In</div>
                        <Advisor />
                        <div className="form-group">
                            <label id="words_1">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={({ target }) => setEmail(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={({ target }) => setPassword(target.value)}
                            />
                            <div className="form-group">
                                <button type="submit" className="btn btn-warning" id="sign-in">Sign In</button>
                            </div>
                        </div>
                        <div className="form-check">


                        </div>
                        <Link to={'/register'}><button type="button" className="btn btn-warning" id="grey-button">Create your Amazing account</button></Link>

                    </form>
                </div>
            </div>
        </>
    )
}