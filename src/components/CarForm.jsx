import React from 'react'

function CarForm({addNewCar, query}) {
  return (
      <form onSubmit={addNewCar}>
        <div>
          <input value={query} type="text" name="image" placeholder="Image URL"/>
          <input value={query} type="text" name="make" placeholder="Make" />
          <input value={query} type="text" name="model" placeholder="Model" />
          <input value={query} type="number" name="year" placeholder="Year" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Car" />
      </form>
  )
}

export default CarForm;