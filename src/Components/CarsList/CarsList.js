import { useEffect, useState } from 'react';
import axios from 'axios';
import CarCard from './CarCard';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://127.0.0.1:3000/api/v1/cars')
      .then((response) => {
        setCars(response.data.cars);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container-fluid vh-100 v-100 d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-spinner fa-spin fs-1" />
      </div>
    );
  }

  return (
    <>
      <h2 className="h2 text-center mt-5 text-uppercase">
        <strong>Our Latest Cars</strong>
      </h2>
      <p className="fs-5 text-center text-muted mb-5">
        Please select a car from below to reserve
      </p>
      <div className="d-flex flex-row gap-5">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            model={car.model}
            make={car.make}
            picture={car.picture}
            price={car.price}
          />
        ))}
      </div>
    </>
  );
};

export default CarList;
