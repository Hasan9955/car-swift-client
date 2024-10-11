import {
    createBrowserRouter, 
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp"; 
import ResetPassword from "../Pages/ResetPassword";
import AboutUs from "../Pages/AboutUs";
import AllCars from "../Pages/AllCars";
import CarDetails from "../Pages/CarDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import { AdminRoutes } from "./AdminRoutes";
import PrivateRoute from "./privateRoute";
import IsAdmin from "./IsAdmin";
import BookingConfirmation from "../Pages/BookingConfirmation";
import CreateBooking from "../Pages/CreateBooking";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signUp',
          element: <SignUp />
        },
        {
          path: "about",
          element: <AboutUs />
        },
        {
          path: "cars",
          element: <AllCars />
        },
        {
          path: "carDetails",
          element: <CarDetails />
        },
        {
          path: 'createBooking',
          element: <CreateBooking />
        },
        {
          path: 'bookingConfirmation',
          element: <BookingConfirmation 
          pickupLocation="Auckland City"
          pickupDate="12 Oct 2024"
          pickupTime="10:00 AM"
          dropoffLocation="Auckland Airport"
          dropoffDate="15 Oct 2024"
          dropoffTime="10:00 AM"
          vehicleName="Mitsubishi ASX"
          vehicleRate="$70/day × 3 days"
          totalVehicleCost="$210"
          insuranceCost="$105"
          oneWayFee="$150"
          roadCareCost="$6"
          grandTotal="$471"
        />
        }
      ]
    },
    {
      path: '/admin-dashboard',
      element: <PrivateRoute><IsAdmin><DashboardLayout /></IsAdmin></PrivateRoute>,
      children: AdminRoutes
    },
    {
      path: '/resetPassword',
      element: <ResetPassword />
    }
  ]);


  export default router;