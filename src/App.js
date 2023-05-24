import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import APP_ROUTES from './utils/appRoutes';
import './App.css';
import LoginPage from './pages/Login';

function App() {
  const isAuthenticated = localStorage.getItem('bearerToken');

  // Custom function to check authentication status
  const checkAuthentication = (route) => {
    if (route.protected && !isAuthenticated) {
      // Redirect unauthenticated users to the login page
      return <LoginPage />;
    }
    const { path, element } = route;
    return <Route path={path} element={element} />;
  };

  const appRoutes = createBrowserRouter(
    APP_ROUTES.map((route) => ({
      ...route,
      component: checkAuthentication(route),
    })),
  );

  return (
    <RouterProvider router={appRoutes}>
      <main>{appRoutes}</main>
    </RouterProvider>
  );
}

export default App;
