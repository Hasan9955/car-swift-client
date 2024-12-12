import { useLocation, useNavigate } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import { TBookings } from "../../../Interface/Index";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../Components/CheckoutForm";



// console.log(import.meta.env.VITE_STRIP_API);
const stripePromises = loadStripe(import.meta.env.VITE_STRIP_API);

const Pay = () => {

    const navigate = useNavigate();
    const location = useLocation(); 
    const bookingInfo: TBookings = location.state;
    
    if(!bookingInfo._id){
        navigate(location.pathname)
        return
    }


    return (
        <div className=" ">
            <Elements stripe={stripePromises}>
                <CheckoutForm price={bookingInfo.totalCost} id={bookingInfo._id} status={bookingInfo.status}/>
            </Elements>
        </div>
    );
};

export default Pay;