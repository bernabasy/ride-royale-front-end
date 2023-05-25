import SplashScreen from '../pages/Splash';
import Home from '../pages/Home';
import MakeReservation from '../pages/MakeReservation/MakeReservation';
import MyReservations from '../pages/MyReservations';
import AddCar from '../pages/AddCar';
import Deletecar from '../pages/DeleteCar';
import CarDetails from '../pages/CarDetails';
import SignupPage from '../pages/Signup';
import LoginPage from '../pages/Login';

const APP_ROUTES = [
  {
    path: '/',
    element: <SplashScreen />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/signin',
    element: <LoginPage />,
  },
  {
    path: '/cars',
    element: <Home />,
  },
  {
    path: '/car/:id',
    element: <CarDetails />,
  },
  {
    path: '/delete-cars',
    element: <Deletecar />,
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

export default APP_ROUTES;
