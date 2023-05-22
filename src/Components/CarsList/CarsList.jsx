import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CarCard from './CarCard';
import './carList.css';

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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <h2 className="h2 text-center mt-4 text-uppercase">
        <strong>Our Latest Cars</strong>
      </h2>
      <p className="fs-5 text-center text-muted mb-5">
        Please select a car from below to reserve
      </p>
      <div>
        <Carousel responsive={responsive}>
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
        </Carousel>
        ;
      </div>
    </>
  );
};

export default CarList;
