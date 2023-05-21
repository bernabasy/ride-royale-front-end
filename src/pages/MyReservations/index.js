import React from 'react';
import Layout from '../../components/Layout/Layout';
import ReservationCardItem from '../../components/ReservationCardItem';

const MyReservations = () => (
  <Layout>
    <div className="min-vh-100 container-fluid page-wrapper">
      <h4 className="text-center my-4">My Reservations</h4>

      <div className="row">
        <ReservationCardItem />
        <ReservationCardItem />
        <ReservationCardItem />
      </div>
    </div>
  </Layout>
);

export default MyReservations;
