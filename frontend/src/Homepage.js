import React from 'react'
import "./Homepage.css"
import carsImg from "./imgs/cars.png"
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div className="homepageWrapper">
            <div className='homepage'>
                <div className="homepage__hcards">
                    <h1>Welcome to Car manager!</h1>
                    <h2>Store informations about your cars!</h2>
                </div>
                <div className="homepage__loginRegisterCard">
                    <h1>Your car, your future. Know your car</h1>
                    <Link to='/login'><button>Login / Register</button></Link>
                </div>
            </div>
            <img src={carsImg} alt="" />
        </div>

    )
}

export default Homepage