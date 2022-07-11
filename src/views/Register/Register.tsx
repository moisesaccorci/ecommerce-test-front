import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import api from "../../api/api";
import '../../styles/bootstrap.css'

export default function Register() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [surname, setLastName] = useState<string>('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = { email, password, name, surname, role: 'user' }
        try {
            const response = await api.post('/auth/register', user)
            localStorage.setItem('user', 'true')
            localStorage.setItem('email', email.toString())
            window.location.href = '/'

        } catch (error: any) {
            const message = error.response.data.message
            console.log(message)
        }

    }

    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col-md">
                    <form onSubmit={handleSubmit}>
                        <div className="sign-in">Create your profile</div>
                        <div className="form-group">
                            <label id="words_1">Email</label>
                            <input
                                required={true}
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={({ target }) => setEmail(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label id="words_1">Password</label>
                            <input
                                required={true}
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={({ target }) => setPassword(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label id="words_1">First name</label>
                            <input
                                required={true}
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="First name"
                                onChange={({ target }) => setName(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label id="words_1">Last name</label>
                            <input
                                required={true}
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="First name"
                                onChange={({ target }) => setLastName(target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-warning" id="sign-in">Create account</button>
                        </div>


                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}