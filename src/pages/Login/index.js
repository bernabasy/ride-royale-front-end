/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { loginUserAsync } from '../../redux/auth/loginReducer';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = useSelector((state) => state.login);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginInfo, setloginInfo] = useState('');

  useEffect(() => {
    if (loginData.data.error) {
      setloginInfo('Invalid username or password');
    } else {
      console.log(loginData);
      setloginInfo('An error occurred while logging in');
    }
  }, [loginData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUserAsync(formData));
  };

  const { email, password } = formData;

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 container">
      <form className={`${style['form-wrapper']}`}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        {
        loginData.status === 'failed' && (
        <div className="alert alert-danger" role="alert">
          {loginInfo}
        </div>
        )
      }
        <div className="form-floating mb-2">
          <input
            type="email"
            className="form-control"
            name="email"
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
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={handleLogin}
        >
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">
          Don&apos;t have an account?
          <NavLink to="/signup" className="ms-2">Signup</NavLink>
        </p>
      </form>
    </div>
  );
};
export default LoginPage;
