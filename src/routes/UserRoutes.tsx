import MyBookings from "../Pages/Dashboard/User/MyBookings";
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

]