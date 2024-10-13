import { useLocation, useParams } from "react-router-dom";
import { TCar } from "../Interface/Index";
import { useGetSingleCarQuery } from "../redux/features/Cars/carsApi"; 
import BookingButton from "../Components/BookingButton";
 


const CarDetails = () => {
    const location = useLocation();
    const params = useParams();
    
    const { data } = useGetSingleCarQuery(params.id);


    const carData: TCar = location.state || data?.data;



    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 bg-base-100 my-10 md:mx-10 px-4 items-start">
                <figure><img className=" w-[400px] md:w-[600px]  h-[230px] md:h-[300px] lg:h-[400px] rounded-xl object-cover " src={carData?.photo} alt="food" /></figure>
                <div className="  flex flex-col">
                    <div>
                        <h2 className="text-lg md:text-xl font-bold">{carData?.name}</h2>
                        <h4 className=" ">Color: {carData?.color}</h4>
                        <h4 className=" ">Features: </h4>
                        <div className="my-2">
                            {carData?.features?.map((feature, index) => (
                                <li key={index} className="  list-item text-sm">
                                    {feature}
                                </li>))}
                        </div>
                        <h4 className="font-bold text-xl text-purple-600 my-2">Price: ${carData?.pricePerHour}</h4>
                    </div>
                    <BookingButton className={"btn w-full bg-gradient text-white "} carData={carData}/>

                    <h4 className="mt-5 max-w-md ">{carData?.description}</h4>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
