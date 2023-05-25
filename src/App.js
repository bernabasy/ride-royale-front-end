import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import APP_ROUTES from './utils/appRoutes';
import './App.css';
// import LoginPage from './pages/Login';
import { authenticateUser } from './redux/auth/authSlice';
import MyReservations from './pages/MyReservations';

const App = () => {
  const dispatch = useDispatch();
  const router = createBrowserRouter(APP_ROUTES);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(authenticateUser());
  }, [dispatch]);

  return (
    <RouterProvider router={router}>
      <App>
        {user.logged_in && <MyReservations />}
      </App>
    </RouterProvider>
  );
};

export default App;
