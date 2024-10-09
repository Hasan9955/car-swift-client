import Card from "../Components/Card";
import IsError from "../Components/IsError";
import IsLoading from "../Components/IsLoading/IsLoading";
import { TCar } from "../Interface/Car";
import { useGetAllCarsQuery } from "../redux/features/Cars/carsApi";


const AllCars = () => {

    const { data, isLoading, isError } = useGetAllCarsQuery(undefined)

    if(isLoading){
        return <IsLoading />
    }
    if(isError){
        return <IsError />
    }
    console.log(data);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
           {
            data && data?.data?.map((car: TCar) => <Card key={car._id} car={car}/>)
            }
        </div>
    );
};

export default AllCars;