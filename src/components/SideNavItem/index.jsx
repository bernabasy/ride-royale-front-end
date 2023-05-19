import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const SideNavItem = ({ title }) => (
  <li className={`list-group-item p-2 ${style['side-nav-item']}`}>
    {title}
  </li>
);

SideNavItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SideNavItem;
