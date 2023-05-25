/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './style.css';
const api_url = 'http://127.0.0.1:3000/api/v1/cars/';

const DeleteCarUi = ({
  id, picture, model, cars, setCars,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const removeCar = (id) => {
    axios
      .delete(`${api_url}${id}/delete`)
      .then(() => {
        let filteredCars = [];
        filteredCars = cars.filter((car) => car.id !== id);
        setCars(filteredCars);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  return (
    <>
      <p className={`${styles.errorMsg} fs-5`}>{errorMessage}</p>
      <section className={`${styles.carCnt} mx-4`} key={id}>
        <div className={styles.imgCnt}>
          <img src={picture} alt={model} className={styles.carImg} />
        </div>
        <div className="model-detail d-flex flex-column justify-content-center align-items-center">
          <h3 className="h4 mt-3">{model}</h3>
        </div>
        <button
          type="button"
          onClick={() => removeCar(id)}
          className="btn btn-danger mb-3"
        >
          Delete
        </button>
      </section>
    </>
  );
};

DeleteCarUi.propTypes = {
  picture: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  cars: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  setCars: PropTypes.func.isRequired,
};

export default DeleteCarUi;