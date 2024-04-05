import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import FindDoctors from "./components/FindDoctors/FindDoctors.jsx";
import Booking from "./components/Booking/Booking.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HeroSection />,
      },
      {
        path: "doctors",
        element: <FindDoctors />,
      },
      {
        path: "bookings",
        element: <Booking />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
