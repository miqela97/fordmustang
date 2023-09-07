import React from "react";
import CarPage from "./CarPage";

function CarList({ cars }) {
  return (
    <table align="center">
      <tbody>
        <tr>
          <th>
            <h3 className="row-title">Img</h3>
          </th>
          <th>
            <h3 className="row-title">Make</h3>
          </th>
          <ol></ol>
          <th>
            <h3 className="row-title">Model</h3>
          </th>
          <ol></ol> 
          <th>
            <h3 className="row-title">Year</h3>
          </th>
        </tr>
        {cars.map((car) => {
          return <CarPage key={car.id} car={car} />;
        })}
      </tbody>
    </table>
  );
}

export default CarList;
