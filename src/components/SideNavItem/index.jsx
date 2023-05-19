import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import style from './style.module.css';

const SideNavItem = ({
  title,
  path,
  children,
}) => (
  <li className={`mx-2 list-group-item border-0 ${style['side-nav-item']}`}>
    <NavLink to={path} className={`${({ isActive }) => (isActive ? style['active-link'] : style['not-active-link'])} text-decoration-none ${style['side-nav-link']}`}>
      {children}
      <span className={`${style['side-nav-span']}`}>{title}</span>
    </NavLink>
  </li>
);

SideNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};

export default SideNavItem;
