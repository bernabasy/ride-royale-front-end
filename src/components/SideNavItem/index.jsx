import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import style from './style.module.css';

const SideNavItem = ({
  key,
  title,
  path,
  children,
}) => (
  <li key={key} className={`mx-2 list-group-item border-0 ${style['side-nav-item']}`}>
    <NavLink to={path} className="text-dark text-decoration-none">
      {children}
      <span className={`${style['side-nav-span']}`}>{title}</span>
    </NavLink>
  </li>
);

SideNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  key: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default SideNavItem;
