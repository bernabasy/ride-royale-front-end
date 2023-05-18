import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <section className="row">
    <aside className="col-md-2 bg-primary vh-100">
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
