/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { register } from '../../redux/auth/authSlice';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ ...formData, setLoading }));
    setFormData({
      username: '',
      email: '',
    });
  };

  const {
    username,
    email,
  } = formData;

  if (user.logged_in) {
    return <Navigate replace to="/cars" />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 container">
      <form className={`${style['form-wrapper']}`}>
        <div className={`${user.error && 'alert alert-danger'}`} role="alert">
          {user.error}
        </div>
        <h1 className="h3 mb-3 fw-normal">Create an Account</h1>
        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="name@example.com"
            value={username}
            onChange={handleChange}
          />
          <label htmlFor="username">Username</label>
        </div>

        <div className="form-floating mb-2">
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        {loading ? (
          <button type="button" className="btn btn-primary disabled mb-3">
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Create account
          </button>
        )}
        <p className="mt-5 mb-3 text-body-secondary">
          Already have an account?
          <NavLink to="/signin" className="ms-2">signin</NavLink>
        </p>
      </form>
    </div>
  );
};
export default SignupPage;
