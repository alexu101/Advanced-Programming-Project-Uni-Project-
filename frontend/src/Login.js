import React from 'react'
import './Login.css'
import { useState } from 'react';
import logo from "./imgs/logo.png"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from "./features/userSlice";

function Login() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginToApp = (e) => {

        e.preventDefault();
        if (!email || !password || email.indexOf('@') === -1)
            return alert('Please enter your credentials to perform the registration !');

        const url = new URL("http://localhost:8080/user/api/signin");

        // axios.get(url, {
        //     params: {
        //         email: email,
        //         model: password,
        //     }
        // })
        //     .then(response => {
        //         console.log(response);
        //         dispatch(
        //             login({
        //                 logged: true
        //             })
        //         );
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         // if (err.response.status === 400)
        //         //     alert("Invalid Credentials !")
        //     }
        //     )

        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        };

        axios.post(url, {
            email: email,
            password: password,
        }, { headers })
            .then(response => {
                dispatch(
                    login({
                        logged: true,
                        userId: response.data.id,
                    })
                );
                alert("Successfully logged in! Now go and check your cars");
            })
            .catch(err => {
                console.log(err);
                if (err.response.status === 500)
                    alert("Invalid Credentials !")
            }
            )
    };








    const register = (e) => {
        e.preventDefault();
        if (!email || !password || email.indexOf('@') === -1)
            return alert('Please enter your credentials to perform the registration !');

        const url = new URL("http://localhost:8080/user/api/signup");

        axios.post(url, {
            email: email,
            password: password,
        })
            .then(response => {
                dispatch(
                    login({
                        logged: true
                    })
                );
                alert("Successfully signed up!");
            })
            .catch(err => {
                console.log(err);
                if (err.response.status === 500)
                    alert("Email already in use!");
            }
            )

    };

    return (
        <div className='login'>
            <img src={logo} alt="" />
            <form>
                <input placeholder='Email' onChange={event => { setEmail(event.target.value); }} type="email" />
                <input placeholder='Password' onChange={event => { setPassword(event.target.value); }} type="password" />
                <button type='submit' onClick={loginToApp} className="login__loginBtn">
                    Sign in
                </button>
                <p>Not a member ?</p>
                <button className="login__registerBtn" onClick={register} type="submit"> Register Now!</button>
            </form>

        </div>
    )
}

export default Login