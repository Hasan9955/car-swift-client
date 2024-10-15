import { useState } from "react";
import Card from "../Components/Card";
import IsError from "../Components/IsError";
import IsLoading from "../Components/IsLoading/IsLoading";
import { TCar } from "../Interface/Index";
import { useGetAllCarsQuery } from "../redux/features/Cars/carsApi";
import FindCar from "./Home/FindCar";
import { useLocation } from "react-router-dom";

export type BookingQuery = {
    date: string;
    startTime: string;
};

const AllCars = () => {

    const location = useLocation();
    const [bookingQuery, setBookingQuery] = useState<BookingQuery | null>(location.state || null); 
    const { data, isLoading, isError } = useGetAllCarsQuery(bookingQuery)

    if (isLoading) {
        return <IsLoading dashboard={false} />
    }
    if (isError) {
        return <IsError />
    }
    

    return (
        <>
            <FindCar setBookingQuery={setBookingQuery} />
            <h2 className="text-lg md:text-2xl p-2 mx-2 md:mx-5 border font-bold">Total available cars: {data?.data?.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
                {
                    data && data?.data?.map((car: TCar) => <Card key={car._id} car={car} />)
                }
            </div>
        </>
    );
};

export default AllCars;