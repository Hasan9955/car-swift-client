import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete, AiOutlineFileAdd } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import { useDeleteCarMutation, useGetAllCarsQuery } from "../../../redux/features/Cars/carsApi";
import { TCar } from "../../../Interface/Index";
import IsLoading from "../../../Components/IsLoading/IsLoading";
import IsError from "../../../Components/IsError";


const ManageCars = () => {



    const navigate = useNavigate();
    const { data, isError, isLoading, refetch } = useGetAllCarsQuery(undefined)
    const [deleteProduct] = useDeleteCarMutation();
    // console.log(data);

    if (isLoading) {
        return <IsLoading dashboard={true} />
    }

    if (isError) {
        return <IsError />
    }

    const handleDelete = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteProduct(id)
                if (res.data.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Car has been deleted.",
                        icon: "success"
                    });
                }
                refetch();
            }
        });

    }

    return (
        <div className="mt-4">
            <div className="flex flex-col justify-center items-center space-y-4">
                <p className="text-2xl lg:text-4xl text-center font-bold">Manage All Cars</p>
                <Link to={'/admin-dashboard/addCar'}>
                    <button className="btn bg-gradient text-white rounded-md"><AiOutlineFileAdd className="text-xl" /> Add Car</button>
                </Link>
            </div>
            {
                data?.data?.length > 0 && <div className="px-4">
                    {
                        data?.data?.map((car: TCar) => <div key={car._id} className="flex flex-col md:flex-row justify-between md:items-center rounded-xl max-w-4xl border shadow-xl mt-10 p-5 md:p-10 md:px-5 md:py-0 mx-auto">
                            <div className="flex md:items-center flex-col md:flex-row md:space-x-3 max-w-[450px] py-5">
                                <div className=" ">
                                    <img className="rounded-lg w-full md:w-56 mb-5 md:mb-0 max-h-32" src={car.photo} alt="" />
                                </div>
                                <div className=" ">
                                    <div className="text-xl font-bold max-w-[250px]">{car.name}</div>
                                    <p>Color: {car.color}</p>
                                    <p>Price P/H: ${car.pricePerHour}</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-lg font-bold text-blue-800">Price P/H: $ {car.pricePerHour}</p>
                                <div className="flex items-center mt-2 gap-2">
                                    <button onClick={() => navigate(`/admin-dashboard/updateCar`, {
                                        state: car._id
                                    })} title="Update" className="btn bg-green-500 text-white  text-xl"><GrDocumentUpdate /></button>
                                    <button title="Delete" onClick={() => handleDelete(car._id)} className="btn bg-red-500 text-white  text-xl"><AiFillDelete /></button>
                                </div>
                            </div>

                        </div>)
                    }
                </div>}
        </div>
    );
};

export default ManageCars;