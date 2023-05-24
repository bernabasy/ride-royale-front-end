/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { login } from '../../redux/auth/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ ...formData, setLoading }));
  };

  const { username } = formData;

  if (user.logged_in) {
    return <Navigate to="/cars" replace />;
  }
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 container">
      <form className={`${style['form-wrapper']}`}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className={`${user.error && 'alert alert-danger'}`} role="alert">
          {user.error}
        </div>

        <div className="form-floating mb-4">
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            placeholder="username"
            value={username}
            onChange={handleChange}
          />
          <label htmlFor="username">username</label>
        </div>
        {loading ? (
          <button type="button" className="btn btn-primary disabled mb-3">
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={handleLogin}
          >
            Sign in
          </button>
        )}
        <p className="mt-5 mb-3 text-body-secondary">
          Don&apos;t have an account?
          <NavLink to="/signup" className="ms-2">Signup</NavLink>
        </p>
      </form>
    </div>
  );
};
export default LoginPage;
