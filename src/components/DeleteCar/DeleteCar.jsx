import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './CarCard';

const DeleteCar = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:3000/api/v1/cars`)
      .then((response) => {
        setCars(response.data.cars);
        setLoading(false);
      });
  }, []);

  if (cars.length <= 0) {
    if (loading) {
      return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
          <i className="fa-solid fa-spinner fa-spin fs-1" />
        </div>
      );
    }
    return (
      <h2 className="mt-5 text-center">
        You don&apos;t have any cars in our system yet.
      </h2>
    );
  }
  return (
    <>
      <h2 className="h2 text-center mt-5 text-uppercase">
        <strong>WELCOME TO THE DELETE AREA</strong>
      </h2>
      <p className="text-center text-muted mb-5">
        Please click on delete button below to delete a car
      </p>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            picture={car.picture}
            model={car.model}
            cars={cars}
            setCars={setCars}
          />
        ))}
      </div>
    </>
  );
};
export default DeleteCar;