import React from 'react';
import style from './style.module.css';

const ReservationCardItem = () => (
  <div className="col-md-6 my-2">
    <div className="card p-2">
      <div className="row g-0">
        <div className="col-md-4">
          <img className={`img-fluid rounded ${style['card-img']}`} src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="luxury car" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card Model: Model</h5>
            <p className="card-text">Reservation date: </p>
            <p className="card-text">Reservation city: </p>
            <p className="card-text">Driver&apos;s Name: </p>
            <p className="card-text">Charge: </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReservationCardItem;
