import React from 'react'
import './AllCars.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { selectUser } from "./features/userSlice"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

function AllCars() {



    // {
    //     "name":"toyota",
    //     "model":"auris",
    //     "color":"red",
    //     "cylinderCapacity":"1999cm3",
    //     "vehicleClass":"e",
    //     "carBodyType":"sedan",
    //     "fabricationYear":1999,
    //     "userId":0
    // }



    const user = useSelector(selectUser);

    const [data, getData] = useState([]);
    const URL = `http://localhost:8080/car/getAll/${user.userId}`;
    useEffect(() => {
        fetchData();
    });
    const fetchData = () => {
        if (user.userId !== undefined)
            fetch(URL)
                .then((res) =>
                    res.json())
                .then((response) => {
                    getData(response);
                })

    }

    const deleteRecord = (id) => {
        const url = `http://localhost:8080/car/car/${id}`;
        fetch(url, { method: 'DELETE' })
            .then((res) => {
                fetchData();

            })
    }
    return (
        ((user.logged !== true) &&
            <div className='pleaseLogin'>
                <h1>Please sign in or sign up!</h1>
                <Link className='pleaseLogin__redirect' to="/login">Go to login</Link>
            </div>) ||

        ((user.logged === true) &&
            <div className='allCars'>
                <h1>Your cars</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>MODEL</th>
                            <th>COLOR</th>
                            <th>CYLINDER CAPACITY (CC)</th>
                            <th>VEHICLE CLASS</th>
                            <th>BODY TYPE</th>
                            <th>FABRICATION YEAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.model}</td>
                                <td>{item.color}</td>
                                <td>{item.cylinderCapacity}</td>
                                <td>{item.vehicleClass}</td>
                                <td>{item.carBodyType}</td>
                                <td>{item.fabricationYear}</td>
                                <td className='deleteBtn'><button onClick={() => { deleteRecord(item.id) }}>🗑️delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    )
}

export default AllCars