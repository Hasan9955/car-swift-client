import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar"; 
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen"><Outlet /></div>
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default Layout;