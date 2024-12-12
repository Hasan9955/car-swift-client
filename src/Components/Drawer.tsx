import { Link, NavLink } from "react-router-dom";
import { FaHome, FaList, FaUsers } from "react-icons/fa";
import { MdCarRental, MdPayments } from "react-icons/md";
import logo from '../assets/carswift.png';
import { navStyle } from "./Navbar";
import { useAppSelector } from "../redux/hook";
import { selectCurrentToken } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { TbBrandBooking, TbTruckReturn } from "react-icons/tb";


const Drawer = () => {

    const token = useAppSelector(selectCurrentToken)
    const vToken = verifyToken(token as string)
    const isUser = vToken.role === 'user';
    const isAdmin = vToken.role === 'admin';
    


    return (
        <div>
            <div className="drawer lg:drawer-open z-[30] min-h-screen h-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="absolute btn btn-square left-2 top-2  drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>

                </div>
                <div className="drawer-side min-h-screen h-full">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="w-64 pt-5 min-h-screen h-full md:px-2 shadow-xl bg-white">
                        <Link to="/" className="mb-8 mx-auto flex justify-center gap-2 items-center">
                            <img className='w-16 md:w-16' src={logo} alt="" />
                            <span className="uppercase font-bold text-xl">C<span className="text-purple-500">a</span>r S<span className="text-purple-500">w</span>ift</span>
                        </Link>
                        <ul className="menu uppercase text-md">
                            
                            {/* Admin routes */}

                            {
                                token && isAdmin && <div>

                                    <li>
                                        <NavLink className={navStyle} to='/admin-dashboard/adminProfile'>
                                            <FaHome className="text-2xl"></FaHome> Admin Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/admin-dashboard/manageCars'>
                                            <MdCarRental className="text-2xl" /> Manage Cars
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/admin-dashboard/manageBookings'>
                                            <FaList className="text-2xl"></FaList>
                                            All  Bookings
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/admin-dashboard/allReturns'>
                                            <TbTruckReturn className="text-2xl"/> Manage Returns
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/admin-dashboard/allUsers'>
                                            <FaUsers className="text-2xl"></FaUsers> All users
                                        </NavLink>
                                    </li>
                                </div>
                            }


                            {/* user routes */}


                            {
                                token && isUser && <div>
                                    <li>
                                        <NavLink to='/user-dashboard/userProfile'>
                                            <FaHome className="text-2xl"></FaHome> My Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/user-dashboard/my-bookings'>
                                            <TbBrandBooking className="text-2xl"/> My Bookings
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/user-dashboard/payment'>
                                        <MdPayments className="text-2xl"/> My Payments
                                        </NavLink>
                                    </li> 
                                    
                                </div>
                            }

                            <div className="divider"></div>
                            
                            <NavLink to='/'>
                                <button className="btn bg-gradient text-white w-full">
                                    <FaHome className="text-2xl"></FaHome>Go Home
                                </button>
                            </NavLink>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Drawer;