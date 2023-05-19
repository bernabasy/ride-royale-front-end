import React from 'react';
import {
  MdHome,
  MdDirectionsCar,
  MdOutlineEventNote,
  MdOutlineAdd,
  MdOutlineDelete,
} from 'react-icons/md';
import SideNavItem from '../SideNavItem';

const SideNav = () => (
  <ul className="list mt-4">
    <SideNavItem title="Home">
      <MdHome className="icon" />
    </SideNavItem>
    <SideNavItem title="New Reservation">
      <MdDirectionsCar className="icon" />
    </SideNavItem>
    <SideNavItem title="My Reservations">
      <MdOutlineEventNote className="icon" />
    </SideNavItem>
    <SideNavItem title="Add Car">
      <MdOutlineAdd className="icon" />
    </SideNavItem>
    <SideNavItem title="Delete Car">
      <MdOutlineDelete className="icon" />
    </SideNavItem>
  </ul>
);

export default SideNav;
