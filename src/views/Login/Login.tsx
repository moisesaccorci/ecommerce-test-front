import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import './Login.css'
import '../../styles/bootstrap.css'

export default function Login() {
  return (

    <section>
      <div className="myOwnNav">
        <p className="text-logo">Amazing</p>
        <ul className="big-screen-nav">
          <li>
            <Link to={'/'}><h6 className="pages">Home</h6></Link>
            <h6 className="pages">Store</h6>
            <button className="primary-button">Login</button>
          </li>
        </ul>

        <ul className="small-screen-nav">
          <li><i className="fa-solid fa-bars"></i></li>
        </ul>
      </div>

      <header>
        <div className="d-flex flex-row justify-content-center">
          <div className="row">
            <div className="col-md">
              <h1>Amazing Store</h1>
            </div>
          </div>
        </div>
      </header>


      <div className="d-flex flex-row justify-content-center">
        <Form />
      </div>

      <div className="d-flex flex-row justify-content-center footer_1">
        <div className="row">
          <div className="col">

          </div>

        </div>
      </div>
    </section>
  )
}