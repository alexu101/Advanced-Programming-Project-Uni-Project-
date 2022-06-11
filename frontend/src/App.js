import './App.css';
import Homepage from './Homepage';
import Header from './Header';
import Login from './Login'
import NewCar from './NewCar'
import AllCars from './AllCars'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = () => {
  //   fetch(URL)
  //     .then((res) =>
  //       res.json())
  //     .then((response) => {
  //       getData(response);
  //     })

  // }


  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/allCars" element={<AllCars />}></Route>
          <Route exact path="/addCar" element={<NewCar />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
