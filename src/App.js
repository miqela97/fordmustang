import React from "react";
import MainPage from "./components/MainPage";
import '../src/App.css'
import { useState, useEffect } from "react";
import {Route, Routes, Link} from "react-router-dom";
import Home from "./components/Pages/Home";
import Info from "./components/Pages/Info";



 function App() {
  const [cars, setCars] = useState([])
  const [query, setQuery] = useState("")

  useEffect (() => {
    fetch('http://localhost:3000/cars')
    .then(res => res.json())
    .then(carsData => setCars(carsData))
  },[])
  const addNewCar = event => {
    event.preventDefault();
    const newCars ={
      make: event.target.make.value,
      image: event.target.image.value,
      model: event.target.model.value,
      year: event.target.year.value,
    }
    fetch('http://localhost:3000/cars', {
    method: "POST",
    headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
    },
    body: JSON.stringify(newCars)
  })
  .then(response => response.json())
  .then(newCarsData => setCars([...cars, newCarsData]));
  }
  const onUpdateQuery = event => setQuery(event.target.value)
 const filteredCars = cars.filter((car) => {
  if(query ==="") return true;
  else return car.make.toLowerCase().includes(query.toLowerCase())
 })
 return (
  <div>
    <div className="header">
      <img src='' alt="" />
      <h1>Car Collection</h1>
      <nav>
       
          <ol>
            <Link to="/">Home</Link>
          </ol>
          <ol>
            <Link to="/search">search</Link>
          </ol>
          <ol>
            <Link to="/info">Information</Link>
          </ol>
       
      </nav>
    </div>
  <Routes>
    <Route exact path="/"  element={<Home />}/>
    <Route path="/search"  element={<MainPage cars={filteredCars} addNewCar={addNewCar} query={query} onUpdateQuery={onUpdateQuery}/> }/>
    <Route path="/info"  element={<Info />}/>
  </Routes>
  </div>
);
}
    

export default App;
