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
import IsAdmin from "./IsAdmin"; 
import CreateBooking from "../Pages/CreateBooking"; 
import PrivateRoute from "./PrivateRoute";
import Bookings from "../Pages/Bookings";
import { UserRoutes } from "./UserRoutes";

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
          path: "carDetails/:id",
          element: <CarDetails />
        },
        {
          path: 'createBooking',
          element: <CreateBooking />
        },
        {
          path: "bookings",
          element: <Bookings />
        }
      ]
    },
    {
      path: '/admin-dashboard',
      element: <PrivateRoute><IsAdmin><DashboardLayout /></IsAdmin></PrivateRoute>,
      children: AdminRoutes
    },
    {
      path: '/user-dashboard',
      element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
      children: UserRoutes
    },
    {
      path: '/resetPassword',
      element: <ResetPassword />
    }
  ]);


  export default router;