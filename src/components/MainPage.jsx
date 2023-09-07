import React from 'react'
import Search from './Search'
import CarForm from './CarForm'
import CarList from './CarList'

function MainPage({cars, addNewCar, query, onUpdateQuery}) {
  
  return (
    <div>
      <Search query={query} onUpdateQuery={onUpdateQuery}/>
      <CarForm addNewCar={addNewCar}/>
      <CarList cars={cars}/>
    </div>
  )
}
export default MainPage;