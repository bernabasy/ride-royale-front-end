import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './style.module.css';
import Layout from '../../components/Layout/Layout';

const MakeReservation = () => {
  const reservedCar = JSON.parse(localStorage.getItem('reservedCar'));
  const authUser = JSON.parse(localStorage.getItem('user'));
  const { id: userId, username } = authUser.user;
  const [responseMsg, setResponseMsg] = useState('');

  const [reservationData, setReservationData] = useState({
    driverName: username || '',
    carName: reservedCar ? reservedCar.make : '',
    city: '',
    date: '',
  });

  const {
    driverName,
    carName,
    city,
    date,
  } = reservationData;

  const [cars, setCars] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/api/v1/cars')
      .then((response) => {
        const data = response.data.cars;
        setCars(data);
      })
      .catch((error) => error);
  }, []);

  const handleReservation = (e) => {
    e.preventDefault();
    //  If there is a reserved car item in local storage, it means the user navigated here
    // from the car_details page. Hence, [the if block] should be executed.
    if (reservedCar) {
      axios
        .post(`http://localhost:3000/api/v1/users/${userId}/reservations/`, {
          city,
          date,
          car_id: reservedCar.id,
        })
        .catch((error) => error.message);

      // Clear form fields
      setReservationData({
        driverName: '',
        city: '',
        date: '',
        carName: '',
      });

      // Destroy the reserved car item in local storage to make room for making a reservation
      //  from the side navigation
      localStorage.removeItem('reservedCar');
    } else {
      axios.post(`http://localhost:3000/api/v1/users/${userId}/reservations/`, {
        city,
        date,
        car_id: 1,
      })
        .then((response) => {
          setResponseMsg(response.statusText);
        })
        .catch((error) => {
          setResponseMsg(error.statusText);
        });
      // Clear form fields
      setReservationData({
        driverName: '',
        city: '',
        date: '',
        carName: '',
      });
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
                      Name:
                      <input
                        type="text"
                        name="driverName"
                        className={`form-control mt-2 rounded-pill ${style['input-field']}`}
                        placeholder="Driver name"
                        id="driverName"
                        onChange={handleChange}
                        value={driverName}
                        required
                      />
                    </label>
                  </div>
                  <div className="col-md-4 ">
                    <label htmlFor="city" className={`form-label ${style.label}`}>
                      Car:
                      <select
                        className={`form-select form-control mt-2 rounded-pill ${style['input-field']}`}
                        aria-label="Default select example"
                        name="carName"
                        id="carname"
                        onChange={handleChange}
                        value={carName}
                        required
                      >
                        <option value={carName || ''}>{carName || 'Choose your luxury ride'}</option>
                        {
                    cars.map((car) => (
                      <option
                        key={car.make}
                        value={`${car.make} ${car.model}`}
                      >
                        {`${car.make} ${car.model}`}
                      </option>
                    ))
                        }
                      </select>
                    </label>
                  </div>
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
                        required
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
                        required
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
            <p className="fs-5 fw-semibold text-black">
              {responseMsg}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MakeReservation;
