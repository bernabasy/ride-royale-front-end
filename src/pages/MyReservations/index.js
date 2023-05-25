import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';

const MyReservationsPage = () => (

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://127.0.0.1:3000/api/v1/users/${user.user.id}/reservations`,
      )
      .then((response) => {
        setReservations(response.data.reservations);
        setLoading(false);
      });
  }, []);
  if (reservations.length <= 0) {
    if (loading) {
      return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
          <i className="fa-solid fa-spinner fa-spin fs-1" />
        </div>
      );
    }
  }

  return (
    <Layout>
      <div className="min-vh-100 container page-wrapper">
        <h4 className="text-center my-4">My Reservations</h4>

        <div className="row">
          {
            reservations.map((reservation) => (
              <ReservationCardItem
                key={reservation.reservation.id}
                data={reservation}
              />
            ))
          }
        </div>
      </div>
    </Layout>
  );
};

export default MyReservationsPage;
