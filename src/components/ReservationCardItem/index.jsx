/* eslint-disable react/destructuring-assignment */
import React from 'react';
import style from './style.module.css';

const ReservationCardItem = (data) => (
  <div className="col-md-6 my-2">
    <div className={`card p-2 shadow-sm ${style['card-wrapper']}`}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className={`img-fluid rounded ${style['card-img']}`}
            src={`${data.data.car.picture}`}
            alt="luxury car"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              Card Model:
              {data.data.car.model}
            </h5>
            <p className="fs-6 m-0">
              Reservation date:
              {data.data.reservation.date}
            </p>
            <p className="fs-6 m-0">
              Reservation city:
              {data.data.reservation.city}
            </p>
            <p className="fs-6 m-0">
              Charge:
              {data.data.car.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReservationCardItem;
