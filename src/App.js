import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import APP_ROUTES from './utils/appRoutes';
import './App.css';

const App = () => {
  const router = createBrowserRouter(APP_ROUTES);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
