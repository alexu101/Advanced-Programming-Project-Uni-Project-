import React from 'react'
import "./Header.css"
import logoImg from "./imgs/logo.png"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from "./features/userSlice";

function Header() {

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(
            login({
                logged: false
            })
        );
    }


    return (

        <div className='header'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="header__logo" onClick={logout}>
                    <img className='header__logo__png' src={logoImg} alt="logo" />
                    <h1>Car Manager</h1>
                </div>
            </Link>
            <div className="header__links">
                <Link to='/addCar' className='header__links__link' href="#">Add a new car</Link>
                <Link to='/allCars' className='header__links__link' href="#">See cars</Link>
            </div>
        </div>
    )
}

export default Header