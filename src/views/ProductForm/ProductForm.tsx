import React, { useEffect, useState } from "react";
import api from "../../api/api";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import '../../styles/bootstrap.css'
import '../Profile/Profile.css'

export default function ProductForm() {
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number>()
    const [userId, setUserId] = useState<number>()
    const [data, setData] = useState<any['email']>([])
    const emailSession = localStorage.getItem('email')?.toString()
    const [email, setEmail] = useState<string>(`${emailSession}`)
    const userSession = localStorage.getItem('user')

    useEffect(() => {
        console.log(email)
        api.get('/auth/login/getuser', {
            params: {
                email: email
            }
        }).then(response => setUserId(response.data.id))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const product = { name, description, price, createdAt: Date.now(), user_id: userId }
        try {
            const response = await api.post('/products', product)
            // console.log('Logged in')
            window.location.href = '/'

        } catch (error: any) {
            const message = error.response.data.message
            console.log(message)
        }

    }

    if (userSession != '') {
        return (
            <>
            <Navbar />
                <div className="row">
                    <div className="col-md">
                        <form onSubmit={handleSubmit}>
                            <div className="sign-in">Create product</div>
                            <div className="form-group">
                                <label id="words_1">Name</label>
                                <input
                                    required={true}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter name"
                                    onChange={({ target }) => setName(target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label id="words_1">Description</label>
                                <br></br>

                                <textarea cols={55} rows={4} placeholder="Description"
                                    onChange={({ target }) => setDescription(target.value)} />
                            </div>
                            <div className="form-group">
                                <label id="words_1">Price</label>
                                <input
                                    required={true}
                                    type="number"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Price"
                                    onChange={({ target }) => setPrice(parseFloat(target.value))}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-warning" id="sign-in">Create product</button>
                            </div>


                        </form>
                    </div>
                </div>
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