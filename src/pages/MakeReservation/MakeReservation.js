import React from 'react';
import style from './style.module.css';
import Layout from '../../components/Layout/Layout';

const MakeReservation = () => (
  <Layout>
    <div className={`bg-image vh-100 ${style['bg-wrapper']}`}>
      <div className={`d-flex justify-content-center align-items-center ${style['image-overlay']}`}>
        <div className="text-center">
          <h1>RESERVE YOUR ROYAL RIDE</h1>
          <p>
            Unleash the Extraordinary, Embark on a Majestic Journey with Ride Royal.
            Indulge in the Epitome of Elegance on Wheels and Let Luxury Be Your Travel Companion.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default MakeReservation;
