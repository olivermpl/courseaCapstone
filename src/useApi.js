import { useState } from 'react';

const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* 
This custom is made because the api.js is not available anymore, so I decieded to create my own functions to simulate the functionality of those mehtods
*/
export default function useApi() {
  const [bookings, setBookings] = useState([]);

  async function submitAPI(booking) {
    await sleep(3000);
    if (
      bookings.find((b) => b.time === booking.time && b.date === booking.date)
    ) {
      throw new Error(
        `booking for this date and time already exists Date:${booking.date} - ${booking.time}`
      );
    }
    setBookings([...bookings, booking]);
    return { message: 'Booking successful', type: 'sucess', booking };
  }

  async function fetchAPI(date) {
    const notAvailableTimes = bookings
      .filter((booking) => booking.date === date)
      .map((b) => b.time);
    return initialTimes.filter((t) => !notAvailableTimes.includes(t));
  }

  return { submitAPI, fetchAPI, bookings };
}
