import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar"; 
import Footer from "../Components/Footer";
import { useEffect } from "react";



const Layout = () => {

    const location = useLocation();

    useEffect(() =>{
        window.scrollTo(0, 0)
    },[location.pathname])

    return (
        <div>
            <Navbar />
            <div className="min-h-screen"><Outlet /></div>
            <Footer />
        </div>
    );
};

export default Layout;