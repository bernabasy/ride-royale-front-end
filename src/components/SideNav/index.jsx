import React from 'react';
import {
  MdHome,
  MdDirectionsCar,
  MdOutlineEventNote,
  MdOutlineAdd,
  MdOutlineDelete,
} from 'react-icons/md';
import SideNavItem from '../SideNavItem';

const SideNav = () => {
  const sideMenuItems = [
    {
      title: 'Home',
      path: '/cars',
      icon: <MdHome className="icon" />,
    },
    {
      title: 'New Reservation',
      path: '/new-reservation',
      icon: <MdDirectionsCar className="icon" />,
    },
    {
      title: 'My Reservation',
      path: '/reservations',
      icon: <MdOutlineEventNote className="icon" />,
    },
    {
      title: 'Add Car',
      path: '/add-car',
      icon: <MdOutlineAdd className="icon" />,
    },
    {
      title: 'Delete Car',
      path: '/delete-car',
      icon: <MdOutlineDelete className="icon" />,
    },
  ];

  return (
    <ul className="list-group bg-white mt-4">
      {
        sideMenuItems.map((item) => (
          <SideNavItem
            key={item.title}
            title={item.title}
            path={item.path}
          >
            {item.icon}
          </SideNavItem>
        ))
      }
    </ul>
  );
};

export default SideNav;
