import Card from "../../Components/Card";
import IsError from "../../Components/IsError";
import IsLoading from "../../Components/IsLoading/IsLoading";
import SectionTitle from "../../Components/sectionTitle";
import { TCar } from "../../Interface/Index";
import { useGetAllCarsQuery } from "../../redux/features/Cars/carsApi";


const FeaturedCars = () => {

    const { data, isLoading, isError } = useGetAllCarsQuery(null)

    if (isLoading) {
        return <IsLoading dashboard={false} />
    }
    if (isError) {
        return <IsError />
    }

    console.log(data);
    return (
        <div>
            <SectionTitle heading="Featured Cars" subHeading="Explore our featured cars"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
                {
                    data?.data?.length && data?.data?.slice(5, 9).map((car: TCar) => <Card key={car._id} car={car} />)
                }
            </div>
        </div>
    );
};

export default FeaturedCars;