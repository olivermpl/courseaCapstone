import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../css/booking.css';
import BookingForm from './BookingForm';
import { useEffect, useReducer, useState } from 'react';
import useApi from '../useApi';
import { useNavigate } from 'react-router-dom';

function BookingPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: new Date().toJSON().slice(0, 10),
      time: '17:00',
      guests: 1,
      occasion: 'Birthday',
    },
    onSubmit: (booking) => {
      submitAPI(booking)
        .then((res) => {
          if (res.type === 'sucess') {
            navigate('/confirmedbooking', { state: { booking: res.booking } });
          }
        })
        .catch((e) => {
          alert(e.message);
        });
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Date is required'),
      time: Yup.string().required('Choose a time'),
      guests: Yup.number()
        .min(1, 'It has to be at least 1 guest')
        .max(10, 'cant be more than 10 guests'),
      occasion: Yup.string()
        .required('Please let us know the occasion')
        .oneOf(['Birthday', 'Anniversary']),
    }),
  });

  const { fetchAPI, submitAPI, bookings } = useApi();

  const [availableSlots, setAvailAbleSlots] = useState(['17:00']);

  useEffect(() => {
    fetchAPI(new Date().toJSON().slice(0, 10)).then((times) => {
      setAvailAbleSlots(times);
    });
  }, []);

  useEffect(() => {
    fetchAPI(formik.values.date).then((times) => setAvailAbleSlots(times));
  }, [bookings]);

  return (
    <main>
      <h1>Book a table</h1>
      <BookingForm
        formik={formik}
        availableSlots={availableSlots}
        setAvailableSlots={setAvailAbleSlots}
        fetchAPI={fetchAPI}
      />
    </main>
  );
}

export default BookingPage;
