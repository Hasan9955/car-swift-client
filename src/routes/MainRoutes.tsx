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