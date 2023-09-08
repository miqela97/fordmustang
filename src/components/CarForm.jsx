import React from 'react'

function CarForm({addNewCar, query}) {
  return (
      <form onSubmit={addNewCar}>
        <div>
          <input value={query} type="surati" name="image" placeholder="Image URL"/>
          <input value={query} type="make" name="make" placeholder="Make" />
          <input value={query} type="model" name="model" placeholder="Model" />
          <input value={query} type="year" name="year" placeholder="Year" step="1.00" />
        </div>
        {/* <input className="button" type="submit" value="Add Car" /> */}
        <button type='submit'><span>Add Car</span></button>
      </form>
  )
}

export default CarForm;