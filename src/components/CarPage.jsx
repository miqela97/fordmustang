import React from 'react'


function CarPage({car }) {
  return (
    <tr className="table-row">
        <td className="row-image">
            <img src={car.image} alt="title" width={150} />
        </td>
        <td className="row-title">{car.make}</td>
        <ol></ol>
        <td>{car.model}</td>
        <ol></ol>
        <td>{car.year}</td>
    </tr>
  )
}

export default CarPage;