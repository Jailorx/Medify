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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="doctors" element={<FindDoctors />} />
      <Route path="hospitals" element={<Hospital />} />
      <Route path="bookings" element={<Booking />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
