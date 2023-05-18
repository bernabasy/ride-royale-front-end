import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <section>
    <aside>
      Side Navigation
    </aside>
    <div>
      {children}
    </div>
  </section>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Layout;
