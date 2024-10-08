import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar"; 
import Footer from "../Components/Footer";



const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen"><Outlet /></div>
            <Footer />
        </div>
    );
};

export default Layout;