import MyBookings from "../Pages/Dashboard/User/MyBookings";
import MyPayments from "../Pages/Dashboard/User/MyPayments";
import Pay from "../Pages/Dashboard/User/Pay";
import Success from "../Pages/Dashboard/User/Success";
import UserProfile from "../Pages/Dashboard/User/UserProfile";



export const UserRoutes = [
    {
        path: 'userProfile',
        element: <UserProfile />
    },
    {
        path: 'my-bookings',
        element: <MyBookings />
    },
    {
        path: 'payment',
        element: <MyPayments />
    },
    {
        path: 'pay',
        element: <Pay />
    },
    {
        path: 'success',
        element: <Success />
    },

]