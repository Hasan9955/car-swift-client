import { Navigate, useLocation } from "react-router-dom";
 

const CreateBooking = () => { 

    const location = useLocation();
    const carData = location?.state?.bookingInfo;
   
    
    if (!carData) {
        return <Navigate to={'/cars'} />
    }

    const car = carData?.car;
    const user = carData?.user;


    return (
        <>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
                <h2 className="text-lg font-semibold mb-4">Booking Summary</h2>
    
                <div className="flex justify-between mb-2">
                    <div>
                        <h3 className="font-semibold">Pick-up</h3>
                        <p className="text-pink-600">{carData?.pickUp}</p>
                        <p className="text-sm text-gray-500">{carData?.dropOff}</p>
                        <p className="text-sm text-gray-500"> </p>
                    </div>
                </div>
    
                <div className="border-t mt-4 pt-4">
                    <div className="flex items-center mb-2">
                        <img className="w-16 h-16 rounded-lg mr-3 object-cover" src={car?.photo} alt="car image" />
                        <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-500">{car?.pricePerHour}</p>
                            <p className="text-red-500 font-semibold">Total: </p>
                        </div>
                    </div>
                </div>
    
                <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between text-sm">
                        <p>Peace of mind Insurance</p>
                        <p className="text-red-500">{car?.pricePerHour}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p>Total Road Care
                            <span className="tooltip" data-tip="Includes road assistance">
                                <i className="fas fa-question-circle"></i>
                            </span>
                        </p>
                    </div>
                </div>
    
                <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                        <p>Grand Total</p>
                        <p className="text-red-500">Total: </p>
                    </div>
                </div>
    
            </div>
        </>
    );


};

export default CreateBooking;