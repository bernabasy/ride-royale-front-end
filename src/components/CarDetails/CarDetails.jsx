import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './style.css';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/api/v1/cars/${id}`)
      .then((response) => setCar(response.data.car));
  }, []);

  return (
    <>
      <h2 className={styles.title}>CAR DETAILS</h2>
      <div className={styles.detailContainer}>
        <div className={styles.car}>
          <img src={car.picture} alt={car.model} />
        </div>
        <div className={styles.detail}>
          <h2>{car.model}</h2>
          <div className={styles.company}>
            <p>Company Name:</p>
            <p>{car.make}</p>
          </div>
          <div className={styles.price}>
            <p>Price Per Day: </p>
            <p className={styles.priceColor}>
              $
              {car.price}
            </p>
          </div>
          <button type="button" className={styles.reservebtn}>
            Reserve
          </button>
        </div>
      </div>
    </>
  );
};
export default CarDetails;
