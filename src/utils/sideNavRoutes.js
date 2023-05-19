import Home from '../pages/Home';
import MakeReservation from '../pages/MakeReservation/MakeReservation';
import MyReservations from '../pages/MyReservations';
import AddCar from '../pages/AddCar';
import Deletecar from '../pages/DeleteCar';

const SIDE_NAV_ROUTES = [
  {
    path: '/cars',
    element: <Home />,
  },
  {
    path: '/new-reservation',
    element: <MakeReservation />,
  },
  {
    path: '/reservations',
    element: <MyReservations />,
  },
  {
    path: '/add-car',
    element: <AddCar />,
  },
  {
    path: '/delete-car',
    element: <Deletecar />,
  },
];

export default SIDE_NAV_ROUTES;
