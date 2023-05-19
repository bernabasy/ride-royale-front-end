import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaRegClosedCaptioning } from 'react-icons/fa';

import style from './style.module.css';

const Layout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleMenuClick = () => {
    setSidebarVisible((sidebarVisible) => !sidebarVisible);
  };

  return (
    <section className="row gx-0">
      <nav className={`container-fluid navbar navbar-light bg-light shadow-sm ${style['status-bar']}`}>
        <div className="row d-flex align-items-center justify-content-start">
          <div className="col">
            <button
              type="button"
              className="btn"
              onClick={handleMenuClick}
            >
              <FaBars style={{ fontSize: '1.5rem' }} />
            </button>
          </div>
        </div>
      </nav>
      <aside className={`col-md-2 bg-light container-fluid vh-100 ${sidebarVisible ? style['aside-visible'] : style['aside-hidden']}`}>
        <div className="row d-flex align-items-center justify-content-start">
          <div className="col">
            <button
              type="button"
              className="btn"
              onClick={handleMenuClick}
            >
              <FaRegClosedCaptioning style={{ fontSize: '1.5rem' }} />
            </button>
          </div>
        </div>
      </aside>
      <div className="col-md-10">
        {children}
      </div>
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Layout;
