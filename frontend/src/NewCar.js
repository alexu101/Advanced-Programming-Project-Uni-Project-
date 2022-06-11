import React from 'react'
import { useState } from 'react';
import logo from "./imgs/logo.png"
import "./NewCar.css"
import axios from 'axios';
import { selectUser } from "./features/userSlice"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

function NewCar() {

    const user = useSelector(selectUser);

    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [cylinderCapacity, setCilinderCapacity] = useState("");
    const [vehicleClass, setvehicleClass] = useState("");
    const [carBodyType, setCarBodyType] = useState("");
    const [fabricationYear, setFabricationYear] = useState(null);

    const addCar = (e) => {
        e.preventDefault();
        const url = new URL("http://localhost:8080/car/add");
        axios.post(url, {
            name: name,
            model: model,
            color: color,
            cylinderCapacity: cylinderCapacity,
            vehicleClass: vehicleClass,
            carBodyType: carBodyType,
            fabricationYear: fabricationYear,
            userId: user.userId
        })
            .then(response => { console.log(response) })
            .catch(err => console.log(err))
    }

    return (
        ((user.logged !== true) &&
            <div className='pleaseLogin'>
                <h1>Please sign in or sign up!</h1>
                <Link className='pleaseLogin__redirect' to="/login">Go to login</Link>
            </div>) ||

        ((user.logged === true) &&
            (<div className='newCar'>
                <img src={logo} alt="" />
                <form>
                    <input value={name} onChange={event => { setName(event.target.value) }} placeholder="Car brand name" type="text" />
                    <input placeholder='Car model' onChange={event => setModel(event.target.value)} type="text" />
                    <input placeholder='Color' onChange={event => setColor(event.target.value)} type="text" />
                    <input placeholder='Cylinder Capacity (cc)' onChange={event => setCilinderCapacity(event.target.value)} type="text" />
                    <input placeholder='Class' onChange={event => setvehicleClass(event.target.value)} type="text" />
                    <input placeholder='Car body type' onChange={event => setCarBodyType(event.target.value)} type="text" />
                    <input placeholder='Fabrication year' onChange={event => setFabricationYear(event.target.value)} type="number" />
                    <button type='submit' onClick={addCar}>
                        Add car
                    </button>
                </form>
            </div>
            )
        ))
}

export default NewCar