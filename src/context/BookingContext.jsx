import React, { useState, useContext } from "react";

const BookingContext = React.createContext();

const BookingContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  return (
    <BookingContext.Provider value={{ bookings, setBookings }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = useContext(BookingContext);
