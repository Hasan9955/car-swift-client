import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/carswift.png'
import { toast } from 'react-toastify';
import { LuLogOut } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { logout, selectCurrentUser } from '../redux/features/auth/authSlice';




// eslint-disable-next-line react-refresh/only-export-components
export const navStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-gradient text-white" : "";

const Navbar = () => {

    const user = useAppSelector(selectCurrentUser);
    const dispatch = useAppDispatch();
    const links = <>
        <li><NavLink className={navStyle} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-gradient text-white" : ""} to='/cars'>Cars</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-gradient text-white" : ""} to={user?.role === "admin" ? `/admin-dashboard/adminProfile` : `/user-dashboard/userProfile`}>Dashboard</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "bg-gradient text-white" : ""} to='/about'>About</NavLink></li>
    </>
    const handleLogOut = () => {
        dispatch(logout())
        toast.error('You are logged out!!!')
    }

    return (
        <div className="navbar justify-between bg-base-100">
            <div className="md:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link className='flex gap-3 justify-center items-center' to='/'>
                    <img className='md:w-20 w-16 h-8' src={logo} alt="logo" />
                    <p className=' md:text-2xl xl:text-3xl font-bold uppercase'>C<span className='text-purple-500'>A</span>R S<span className='text-purple-500'>W</span>IFT</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="md:navbar-end">
                {
                    user ?
                        <div className='flex items-center'>
                            <p className='font-bold border-2 mr-1 p-2 text-lg hidden md:flex'>{user.name}</p>
                            <div className="dropdown dropdown-hover dropdown-end">
                                <label tabIndex={0} className="md:mx-2 btn btn-sm md:btn-md btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full border-2 border-blue-500">
                                        <img src={user.photo} alt='userImg' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[10] menu px-5 mt-3 shadow bg-base-100 rounded-box py-5 w-56">
                                    <div className='flex flex-col justify-center items-center mb-4'>
                                        <label tabIndex={0} className="btn btn-circle avatar">
                                            <div className="w-16 rounded-full">
                                                <Link to={user?.role === "admin" ? `/admin-dashboard/adminProfile` : `/user-dashboard/userProfile`}>
                                                    <img src={user.photo} alt='userImg' />

                                                </Link>
                                            </div>
                                        </label>
                                        <h2 className='text-lg font-bold'>{user.name}</h2>
                                        <h2>{user.userEmail}</h2>

                                    </div>
                                    <li><NavLink to={user?.role === "admin" ? `/admin-dashboard/adminProfile` : `/user-dashboard/userProfile`}>Dashboard</NavLink></li>
                                    <li><button className='font-bold text-md text-blue-500' onClick={handleLogOut}>Logout <LuLogOut /></button></li>
                                </ul>
                            </div>
                        </div> : <Link to='/login'><button className="btn bg-gradient text-white md:ml-2">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;