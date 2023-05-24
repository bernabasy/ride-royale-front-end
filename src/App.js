import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import APP_ROUTES from './utils/appRoutes';
import './App.css';
// import LoginPage from './pages/Login';

function App() {
  const router = createBrowserRouter(APP_ROUTES);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
