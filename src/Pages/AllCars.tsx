import { useState } from "react";
import Card from "../Components/Card";
import IsError from "../Components/IsError";
import IsLoading from "../Components/IsLoading/IsLoading";
import { TCar } from "../Interface/Index";
import { useGetAllCarsQuery } from "../redux/features/Cars/carsApi";
import FindCar from "./Home/FindCar";

export type BookingInfo = {
    date: string;
    startTime: string;
    endTime: string;
  };

const AllCars = () => {

    const [bookingInfo, setBookingInfo] = useState<BookingInfo | null>(null);
    console.log(bookingInfo);
    const { data, isLoading, isError } = useGetAllCarsQuery(undefined)

    if (isLoading) {
        return <IsLoading  dashboard={false} />
    }
    if (isError) {
        return <IsError />
    }
    console.log(data);

    return (
        <>
        <FindCar setBookingInfo={setBookingInfo}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
            {
                data && data?.data?.map((car: TCar) => <Card key={car._id} car={car} />)
            }
        </div>
            </>
    );
};

export default AllCars;