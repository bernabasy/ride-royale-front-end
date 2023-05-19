import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MakeReservation from './pages/MakeReservation/MakeReservation';
import './App.css';
import Home from './pages/Home';
import MyReservations from './pages/MyReservations';
import AddCar from './pages/AddCar';
import Deletecar from './pages/DeleteCar';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/cars" element={<Home />} />
          <Route path="/new-reservation" element={<MakeReservation />} />
          <Route path="/reservations" element={<MyReservations />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/delete-car" element={<Deletecar />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
