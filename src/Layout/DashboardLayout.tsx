 import Drawer from '../Components/Drawer';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <Drawer />
            <div className='flex-1 mt-5'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;