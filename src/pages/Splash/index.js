import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const SplashScreen = () => (
  <div className={`bg-image min-vh-100 ${style['bg-wrapper']}`}>
    <div className={`d-flex flex-column justify-content-center align-items-center ${style['image-overlay']}`}>
      <div>
        <h4 className="fw-bold fs-1 mb-4 text-white">Ride Royale</h4>
      </div>
      <div>
        <NavLink to="/signin" className="btn btn-primary text-white mx-4">Login</NavLink>
        <NavLink to="/signup" className="btn btn-secondary text-white mx-4">Sign Up</NavLink>
      </div>
    </div>
  </div>
);

export default SplashScreen;
