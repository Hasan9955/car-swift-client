import { jwtDecode } from 'jwt-decode';
 
interface CustomJwtPayload {
    exp: number;         
    iat: number;       
    name: string;      
    photo: string;     
    role: 'user' | 'admin'; 
    userEmail: string;   
    userId: string; 
}

export const verifyToken = (token: string): CustomJwtPayload => {
    return jwtDecode(token)
}