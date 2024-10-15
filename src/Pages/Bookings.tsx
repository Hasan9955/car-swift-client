/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { MdErrorOutline } from "react-icons/md";
import IsError from "../Components/IsError";
import IsLoading from "../Components/IsLoading/IsLoading";
import { TBookings } from "../Interface/Index";
import { useDeleteBookingMutation, useGetMyBookingsQuery } from "../redux/features/bookings/bookingsApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const Bookings = () => {


    const [cancelBooking] = useDeleteBookingMutation();
    const { data, isLoading, isError, refetch } = useGetMyBookingsQuery(undefined, {
        refetchOnMountOrArgChange: true
    });

    console.log(data);

    if (isLoading) {
        return <IsLoading />
    }

    if (isError) {
        return <IsError />
    }

    const handleCancel = async (id: string) => {
        try {
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
                    const res = await cancelBooking(id)
                    if (res.data.success) {
                        Swal.fire({
                            title: "Canceled!",
                            text: "Booking has been canceled.",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500

                        });
                        refetch();
                    } 
                }
            });
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message || 'An error is going on!')
        }

    }

    const convertTo12HourFormat = (time: string) => {
        let [hours, minutes] = time.split(':').map(Number);
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 24-hour to 12-hour
        return `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
      }; 


      const formatDate = (dateString: string) => {
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June', 
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
      
        const [year, month, day] = dateString.split('-');
        const monthName = months[parseInt(month) - 1];
      
        return `${day} ${monthName} ${year}`;
      };

    return (
        <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Car Details</th>
                        <th>Time & Date</th> 
                        <th>Cancel Booking</th>
                    </tr>
                </thead>
                {
                    data?.data?.length && data?.data?.map((booking: TBookings) => <tbody key={booking._id}>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <Link to={`/carDetails/${booking.car._id}`}><div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={booking.car.photo}
                                                alt="car photo" />
                                        </div>
                                    </div></Link>
                                    <div>
                                        <div className="font-bold mb-1 ">{booking.car.name}</div>
                                        <p className="text-sm font-normal">
                                        <span className="text-purple-600 text-md font-bold">
                                            ${booking.car.pricePerHour}
                                        </span> USD/hour</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div  className="flex flex-col gap-2">
                                    <p className="badge badge-ghost">{convertTo12HourFormat(booking.startTime)}</p> 
                                <p>{formatDate(booking.date)}</p>
                                </div>
                            </td> 
                            <td>
                                <button onClick={() => handleCancel(booking._id)} className="btn btn-error text-white ">
                                    <MdErrorOutline className="text-lg">
                                    </MdErrorOutline > Cancel
                                </button>
                            </td>
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
    );
};

export default Bookings;