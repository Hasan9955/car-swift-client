import AddCar from "../Pages/AddCar";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import ManageAllUsers from "../Pages/Dashboard/Admin/ManageAllUsers";
import ManageBookings from "../Pages/Dashboard/Admin/ManageBookings";
import ManageCars from "../Pages/Dashboard/Admin/ManageCars";
import ManageReturnCars from "../Pages/Dashboard/Admin/ManageReturnCars";
import UpdateCar from "../Pages/UpdateCar";


export const AdminRoutes = [
    {
        path: 'adminProfile',
        element: <AdminProfile />
    },
    {
        path: 'allUsers',
        element: <ManageAllUsers />
    },
    {
        path: 'manageCars',
        element: <ManageCars />
    },
    {
        path: 'manageBookings',
        element: <ManageBookings />
    },
    {
        path: 'addCar',
        element: <AddCar />
    },
    {
        path: 'updateCar',
        element: <UpdateCar />
    },
    {
        path: 'manageReturnCar',
        element: <ManageReturnCars />
    }
]