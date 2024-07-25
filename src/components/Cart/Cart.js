import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));

  if (!bookingDetails) {
    return <div>No booking details found</div>;
  }

  return (
    <div className="cart">
      <h2>Booking Summary</h2>
      <p>Movie: {bookingDetails.movie}</p>
      <p>Theater: {bookingDetails.theater}</p>
      <p>Number of Seats: {bookingDetails.seats}</p>
      <p>Show Timing: {bookingDetails.showTiming}</p>
      <p>Ticket Price: {bookingDetails.ticketPrice}</p>
      <button className="go-back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default Cart;
