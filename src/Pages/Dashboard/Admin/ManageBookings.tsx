import { MdErrorOutline } from "react-icons/md";
import IsError from "../../../Components/IsError";
import IsLoading from "../../../Components/IsLoading/IsLoading";
import { TBookings } from "../../../Interface/Index";
import { useDeleteBookingMutation, useGetAllBookingsQuery, useUpdateBookingMutation } from "../../../redux/features/bookings/bookingsApi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { SiTicktick } from "react-icons/si";


const ManageBookings = () => {

    const { data, isError, isLoading } = useGetAllBookingsQuery({
        status: 'PAID-UNPAID'
    });
    const [deleteBooking] = useDeleteBookingMutation();
    const [updateBooking] = useUpdateBookingMutation();

    if (isLoading) {
        return <IsLoading dashboard={true} />
    }
    if (isError) {
        return <IsError />
    }

    const handelCancel = async (id: string) => {
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
                const res = await deleteBooking(id);
                if (res.data.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Booking deleted successfully.",
                        icon: "success"
                    });
                }
            }
        });
    }

    const handelAccept = async (id: string) => {
        const updateData = {
            id,
            data: {
                status: 'APPROVED'
            }
        }
        const res = await updateBooking(updateData);
        if (res.data.success) {
            Swal.fire({
                title: "Approved!",
                text: "Booking approved successfully.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    const convertTo12Hour = (time24: string) => {
        const [hour, minute] = time24.split(':').map(Number);

        const period = hour >= 12 ? 'PM' : 'AM';

        const hour12 = hour % 12 || 12;
        return `${hour12}:${minute.toString().padStart(2, '0')} ${period}`;
    }

    const formateDate = (date: string) => {
        const [year, month, day] = date.split('-').map(Number);

        return `${day}-${month}-${year}`
    }

    return (

        <div>
            {
                data.data.length > 0 ? <div>
                    <div className="flex flex-col justify-center items-center ">
                        <p className="text-2xl lg:text-4xl my-5 text-center font-bold">Manage All Bookings</p>

                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User Info</th>
                                    <th>Booking Info</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {
                                data?.data?.length && data?.data?.map((booking: TBookings) => <tbody key={booking._id}>
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <Link to={`/carDetails/${booking.car._id}`}>
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={booking.car.photo}
                                                                alt="User's photo" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{booking.user.name}</div>
                                                    <div className="text-sm opacity-50">{booking.user.email}</div>
                                                    <div className="text-sm opacity-50">{booking.user.phone}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>Booking Date: {formateDate(booking.date)}</p>
                                            <p>Booking Time: {convertTo12Hour(booking.startTime)}</p>
                                            <p>Price P/H: ${booking.car.pricePerHour}</p>

                                        </td>
                                        <td>
                                        <div> 
                                             <p className={`badge badge-ghost badge-sm font-bold ${booking.status === 'PENDING' && 'text-purple-500'} ${booking.status === 'APPROVED' && 'text-blue-500'} ${booking.status === 'UNPAID' && 'text-red-500'} ${booking.status === 'PAID' && 'text-green-500'}`}>{booking.status}</p>
                                        </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center items-center flex-col">
                                                <button onClick={() => handelAccept(booking._id)} className={`btn btn-sm ${booking.status === 'PENDING' ? 'bg-gradient' : ''} text-white `} disabled={booking.status === 'PENDING' ? false : true}><SiTicktick className="text-md" /> Accept</button>
                                                <button onClick={() => handelCancel(booking._id)} className="mt-2 btn btn-sm btn-error text-white " disabled={booking.endTime ? true : false}>
                                                    <MdErrorOutline className="text-lg">
                                                    </MdErrorOutline> Cancel
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>)
                            }
                        </table>
                    </div>
                </div> :
                    <div className="text-3xl text-center font-bold mt-32">
                        <p>No booking exist!</p>
                    </div>
            }
        </div>
    );
};

export default ManageBookings;