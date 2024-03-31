import React, { useEffect, useState } from 'react';
import useApi from '../useApi';

function BookingForm({ formik, availableSlots, setAvailableSlots, fetchAPI }) {
  const handleOnDateChange = (e) => {
    formik.setFieldValue('date', e.target.value);
    fetchAPI(e.target.value).then((times) => {
      setAvailableSlots(times);
    });
  };
  const [buttonText, setButtonText] = useState('Make your reservation');

  return (
    <form onSubmit={formik.handleSubmit} className="booking-form">
      <div
        className={`field ${
          formik.errors.date && formik.touched.date ? 'errorInput' : ''
        }`}
      >
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={formik.values.date}
          onChange={handleOnDateChange}
        />

        <p className="error">{formik.errors.date}</p>
      </div>
      <div
        className={`field ${
          formik.errors.time && formik.touched.time ? 'errorInput' : ''
        }`}
      >
        <label htmlFor="time">Time</label>
        <select name="time" value={formik.time} onChange={formik.handleChange}>
          {availableSlots.map((slot) => (
            <option key={slot}>{slot}</option>
          ))}
        </select>

        <p className="error">{formik.errors.time}</p>
      </div>
      <div
        className={`field ${
          formik.errors.guests && formik.touched.guests && 'errorInput'
        }`}
      >
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          name="guests"
          value={formik.values.guests}
          onChange={formik.handleChange}
        />

        <p className="error">{formik.errors.guests}</p>
      </div>
      <div
        className={`field ${
          formik.errors.occasion && formik.touched.occasion ? 'errorInput' : ''
        }`}
      >
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          value={formik.occasion}
          onChange={formik.handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <p className="error">{formik.errors.occasion}</p>
      </div>
      <div className="field ">
        <input
          type="submit"
          className="btn-primary"
          value={buttonText}
          onClick={() => setButtonText('Reserving a table...')}
        />
      </div>
    </form>
  );
}

export default BookingForm;
