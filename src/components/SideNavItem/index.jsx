import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const SideNavItem = ({ title, children }) => (
  <li className={`list-group-item p-2 ${style['side-nav-item']}`}>
    {children}
    <span className={` ${style['side-nav-span']}`}>{title}</span>
  </li>
);

SideNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default SideNavItem;
