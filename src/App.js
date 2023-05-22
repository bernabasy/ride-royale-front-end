import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import APP_ROUTES from './utils/sideNavRoutes';
import './App.css';

function App() {
  const appRoutes = createBrowserRouter(APP_ROUTES);

  return (
    <main>
      <RouterProvider router={appRoutes} />
    </main>
  );
}

export default App;
