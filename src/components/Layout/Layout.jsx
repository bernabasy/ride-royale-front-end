import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

const Layout = ({ children }) => (
  <section className="row gx-0">
    <nav className={`container-fluid navbar navbar-light bg-light shadow-sm ${style['status-bar']}`}>
      <button
        type="button"
        className="btn"
      >
        Menu
      </button>
    </nav>

    <aside className={`col-md-2 bg-primary vh-100 ${style['aside-wrapper']}`}>
      Side Navigation
    </aside>
    <div className="col-md-10">
      {children}
    </div>
  </section>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Layout;
