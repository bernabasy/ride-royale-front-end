/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const SignupPage = () => (
  <div className="d-flex justify-content-center align-items-center min-vh-100 container">
    <form className={`${style['form-wrapper']}`}>
      <h1 className="h3 mb-3 fw-normal">Create an Account</h1>

      <div className="form-floating mb-2">
        <input type="text" className="form-control" id="username" placeholder="name@example.com" />
        <label htmlFor="username">Username</label>
      </div>

      <div className="form-floating mb-2">
        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        <label htmlFor="email">Email</label>
      </div>

      <div className="form-floating mb-4">
        <input type="password" className="form-control" id="password" placeholder="Password" />
        <label htmlFor="password">Password</label>
      </div>

      <div className="form-floating mb-4">
        <input type="password" className="form-control" id="password" placeholder="Password" />
        <label htmlFor="password">Confirm Password </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Create account</button>
      <p className="mt-5 mb-3 text-body-secondary">
        Already have an account?
        <NavLink to="/signin" className="ms-2">signin</NavLink>
      </p>
    </form>
  </div>
);
export default SignupPage;
