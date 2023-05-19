import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SIDE_NAV_ROUTES from './utils/sideNavRoutes';
import './App.css';

function App() {
  const sideNavRoutes = createBrowserRouter(SIDE_NAV_ROUTES);

  return (
    <main>
      <RouterProvider router={sideNavRoutes} />
    </main>
  );
}

export default App;
