import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
