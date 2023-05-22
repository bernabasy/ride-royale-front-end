/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const LoginPage = () => (
  <div className="d-flex justify-content-center align-items-center min-vh-100 container">
    <form className={`${style['form-wrapper']}`}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating mb-2">
        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        <label htmlFor="email">Email</label>
      </div>

      <div className="form-floating mb-4">
        <input type="password" className="form-control" id="password" placeholder="Password" />
        <label htmlFor="password">Password</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-body-secondary">
        Don&apos;t have an account?
        <NavLink to="/signup" className="ms-2">Signup</NavLink>
      </p>
    </form>
  </div>
);
export default LoginPage;
