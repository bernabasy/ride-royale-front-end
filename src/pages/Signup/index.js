/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { createUserAsync } from '../../redux/auth/registrationReducer';

const SignupPage = () => {
  const registrationData = useSelector((state) => state.register);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [registrationInfo, setRegistrationInfo] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (registrationData.success === true) {
      navigate('/signin');
    } else {
      setRegistrationInfo('Email has already been taken please.');
    }
  }, [registrationData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { passwordConfirm, ...userData } = formData;
    dispatch(createUserAsync(userData));
    // setFormData({
    //   username: '',
    //   email: '',
    //   password: '',
    //   passwordConfirm: '',
    // });
    // navigate('/signin');
  };

  const {
    username,
    email,
    password,
    passwordConfirm,
  } = formData;

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 container">
      <form className={`${style['form-wrapper']}`}>
        {
        registrationData.status === 'failed' && (
        <div className="alert alert-danger" role="alert">
          {registrationInfo}
        </div>
        )
      }
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

        <div className="form-floating mb-4">
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>

        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="Password"
            value={passwordConfirm}
            onChange={handleChange}
          />
          <label htmlFor="password">Confirm Password </label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Create account
        </button>
        <p className="mt-5 mb-3 text-body-secondary">
          Already have an account?
          <NavLink to="/signin" className="ms-2">signin</NavLink>
        </p>
      </form>
    </div>
  );
};
export default SignupPage;
