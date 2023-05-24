import SplashScreen from '../pages/Splash';
import Home from '../pages/Home';
import MakeReservation from '../pages/MakeReservation/MakeReservation';
import MyReservations from '../pages/MyReservations';
import AddCar from '../pages/AddCar';
import Deletecar from '../pages/DeleteCar';
import SignupPage from '../pages/Signup';
import LoginPage from '../pages/Login';

const APP_ROUTES = [
  {
    path: '/',
    element: <SplashScreen />,
    protected: false,
  },
  {
    path: '/signup',
    element: <SignupPage />,
    protected: false,
  },
  {
    path: '/signin',
    element: <LoginPage />,
    protected: false,
  },
  {
    path: '/cars',
    element: <Home />,
    protected: true,
  },
  {
    path: '/new-reservation',
    element: <MakeReservation />,
    protected: true,
  },
  {
    path: '/reservations',
    element: <MyReservations />,
    protected: true,
  },
  {
    path: '/add-car',
    element: <AddCar />,
    protected: true,
  },
  {
    path: '/delete-car',
    element: <Deletecar />,
    protected: true,
  },
];

export default APP_ROUTES;
