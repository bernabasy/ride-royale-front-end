import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import style from './style.module.css';
import Layout from '../../components/Layout/Layout';

const MakeReservation = () => {
  const [reservationData, setReservationData] = useState({
    city: '',
    date: '',
  });
  const user = useSelector((state) => state.user);
  const { city, date } = reservationData;
  const [reserved, setReserved] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReservation = (e) => {
    e.preventDefault();
    const reservedCar = JSON.parse(localStorage.getItem('reservedCar'));
    if (reservedCar) {
      // Make a post request to the make reservation URL with appropriate data
      axios
        .post(`http://localhost:3000/api/v1/users/${user.user.id}/reservations/`, {
          city,
          date,
          car_id: reservedCar.id,
        })
        .then(() => {
          setReserved(true);
        })
        .catch((error) => {
          // setErrorMessage(error.response.data.error);
          console.log(error.message);
        });

      // Clear form fields
      setReservationData({
        city: '',
        date: '',
      });

      localStorage.removeItem('reservedCar');
    } else {
      console.log('No data');
    }
  };

  return (
    <Layout>
      <div className={`bg-image min-vh-100 ${style['bg-wrapper']}`}>
        <div className={`d-flex flex-column justify-content-center align-items-center ${style['image-overlay']}`}>
          <div className="w-75">
            <div className="text-center">
              <h1 className="h3 fw-bold text-white">RESERVE YOUR ROYAL RIDE</h1>
              <div className="d-flex justify-content-center">
                <span className={`w-75 my-2 ${style.divider}`}> </span>
              </div>
              <p className="text-white">
                Unleash the Extraordinary, Embark on a Majestic Journey with Ride Royal.
                Indulge in the Epitome of Elegance on
                Wheels and Let Luxury Be Your Travel Companion.
              </p>
              <p className="text-white mb-4">
                Enter a city and a reservation date
              </p>
            </div>

            <div className="d-flex justify-content-center">
              <form className="form">
                <div className="row gy-2">
                  <div className="col-md-4 ">
                    <label htmlFor="city" className={`form-label ${style.label}`}>
                      City:
                      <input
                        type="text"
                        name="city"
                        className={`form-control mt-2 rounded-pill ${style['input-field']}`}
                        placeholder="City"
                        id="city"
                        onChange={handleChange}
                        value={city}
                      />
                    </label>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="date" className={`form-label ${style.label}`}>
                      Reservation Date:
                      <input
                        type="date"
                        name="date"
                        className={`form-control mt-2 rounded-pill ${style['input-field']}`}
                        placeholder="Reservation Date"
                        id="date"
                        value={date}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="col-md-4 d-flex align-items-end pb-2 ">
                    <button
                      type="submit"
                      className={`btn rounded-pill fw-bold ${style['btn-submit']}`}
                      id="reserve"
                      onClick={handleReservation}
                    >
                      Reserve Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MakeReservation;
