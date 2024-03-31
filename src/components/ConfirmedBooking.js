import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ConfirmedBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location?.state?.booking;
  useEffect(() => {
    if (!booking) {
      navigate('/');
    }
  }, []);
  return (
    <main>
      <h1>Booking Succed!</h1>
      <h2>Details</h2>
      <section className="details">
        <p>Date:</p>
        <p>
          {booking.date} - {booking.time}
        </p>
        <p>Number of Guests:</p>
        <p>{booking.guests}</p>
        <p>Occasion</p>
        <p>{booking.occasion}</p>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
