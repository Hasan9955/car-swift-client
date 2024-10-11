import { ReactNode } from "react";
import { selectCurrentToken, TUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hook";
import { verifyToken } from "../utils/verifyToken";
import { Navigate, useLocation } from "react-router-dom";

 
const IsAdmin = ({ children }: { children: ReactNode }) => {

    const location = useLocation();
    const token = useAppSelector(selectCurrentToken);

    const userData = verifyToken(token as string) as TUser
     
    if(userData.role !== 'admin'){
        return <Navigate to={'/login'} state={location.pathname} />
    }
    return children;
};

export default IsAdmin;