import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import FindDoctors from "./components/FindDoctors/FindDoctors.jsx";
import Booking from "./components/Booking/Booking.jsx";
import Hospital from "./components/Hospital/Hospital.jsx";

import { HospitalContextProvider } from "./contexts/HospitalContext";
import { BookingContextProvider } from "./contexts/BookingContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="doctors" element={<FindDoctors />} />
      <Route
        path="hospitals"
        element={
          <HospitalContextProvider>
            <Hospital />
          </HospitalContextProvider>
        }
      />
      <Route
        path="bookings"
        element={
          <BookingContextProvider>
            <Booking />
          </BookingContextProvider>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
