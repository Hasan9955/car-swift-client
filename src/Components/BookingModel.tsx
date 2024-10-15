/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAppSelector } from "../redux/hook";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { TCar } from "../Interface/Index";
import { useAddBookingMutation } from "../redux/features/bookings/bookingsApi";
import Swal from "sweetalert2"; 

interface CampaignDetailsProps {
    carData: TCar;
    closeModal: () => void;
}

const BookingModel: React.FC<CampaignDetailsProps> = ({
    carData,
    closeModal,
}) => {

    const [createBooking] = useAddBookingMutation();
    const user = useAppSelector(selectCurrentUser)
    const location = useLocation();
    const modalBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (modalBtnRef.current) {
            modalBtnRef.current.click();
        }
    }, []);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [closeModal]);

    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>;
    }

    const handleResister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const date = formData.get("date") as string;
        const startTime = formData.get("startTime") as string;

        const bookingInfo = {
            car: carData._id,
            user: user.userId,
            date,
            startTime
        }; 

        try {
            const res = await createBooking(bookingInfo).unwrap();
             
            if (res.success) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Car booked successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            closeModal();
        } catch (error: any) { 
            // console.log(error);
            // toast.error(error?.data?.message || 'An error is going on!')
            Swal.fire({
                position: "center",
                icon: "error",
                // title: error?.data?.message || 'An error is going on!',
                text: error?.data?.message || 'An error is going on!',
                showConfirmButton: true
            });
            closeModal();
        }
        

    };



    return (
        <div>
            <button
                ref={modalBtnRef}
                className=" "
                onClick={() => {
                    const modal =
                        (document.getElementById("my_modal_2") as HTMLDialogElement) ||
                        null;
                    if (modal) {
                        modal.showModal();
                    }
                }}
            >
                Book Now
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center mb-5">
                        Fill up booking info.
                    </h3>
                    <div className="flex justify-center items-center gap-5">
                        <form onSubmit={handleResister}>

                            <div className="gap-2 flex justify-center items-center my-2">
                                <img className="max-w-36 rounded-lg" src={carData.photo} alt="car photo" />
                                <div>
                                    <p>{carData.name}</p>
                                    <p className="text-sm font-normal my-1">Color: {carData.color}</p>
                                    <p className="text-sm font-normal">
                                        <span className="text-purple-600 text-md font-bold">
                                            ${carData.pricePerHour}
                                        </span> USD/hour</p>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input
                                    // defaultValue={'2024-10-18'}
                                    type="date"
                                    className="input input-bordered"
                                    placeholder="Enter date"
                                    name="date"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <select required className="select select-bordered max-h-40 overflow-x-auto"
                                    name="startTime">
                                    <option></option>
                                    <option value='24:00'>12:00 AM</option>
                                    <option value='24:30'>12:30 AM</option>
                                    <option value='01:00'>01:00 AM</option>
                                    <option value='01:30'>01:30 AM</option>
                                    <option value='02:00'>02:00 AM</option>
                                    <option value='02:30'>02:30 AM</option>
                                    <option value='03:00'>03:00 AM</option>
                                    <option value='03:30'>03:30 AM</option>
                                    <option value='04:00'>04:00 AM</option>
                                    <option value='04:30'>04:30 AM</option>
                                    <option value='05:00'>05:00 AM</option>
                                    <option value='05:30'>05:30 AM</option>
                                    <option value='06:00'>06:00 AM</option>
                                    <option value='06:30'>06:30 AM</option>
                                    <option value='07:00'>07:00 AM</option>
                                    <option value='07:30'>07:30 AM</option>
                                    <option value='08:00'>08:00 AM</option>
                                    <option value='08:30'>08:30 AM</option>
                                    <option value='09:00'>09:00 AM</option>
                                    <option value='09:30'>09:30 AM</option>
                                    <option value='10:00'>10:00 AM</option>
                                    <option value='10:30'>10:30 AM</option>
                                    <option value='11:00'>11:00 AM</option>
                                    <option value='11:30'>11:30 AM</option>
                                    <option value='12:00'>12:00 PM</option>
                                    <option value='12:30'>12:30 PM</option>
                                    <option value='13:00'>01:00 PM</option>
                                    <option value='13:30'>01:30 PM</option>
                                    <option value='14:00'>02:00 PM</option>
                                    <option value='14:30'>02:30 PM</option>
                                    <option value='15:00'>03:00 PM</option>
                                    <option value='15:30'>03:30 PM</option>
                                    <option value='16:00'>04:00 PM</option>
                                    <option value='16:30'>04:30 PM</option>
                                    <option value='17:00'>05:00 PM</option>
                                    <option value='17:30'>05:30 PM</option>
                                    <option value='18:00'>06:00 PM</option>
                                    <option value='18:30'>06:30 PM</option>
                                    <option value='19:00'>07:00 PM</option>
                                    <option value='19:30'>07:30 PM</option>
                                    <option value='20:00'>08:00 PM</option>
                                    <option value='20:30'>08:30 PM</option>
                                    <option value='21:00'>09:00 PM</option>
                                    <option value='21:30'>09:30 PM</option>
                                    <option value='22:00'>10:00 PM</option>
                                    <option value='22:30'>10:30 PM</option>
                                    <option value='23:00'>11:00 PM</option>
                                    <option value='23:30'>11:30 PM</option>
                                </select >
                            </div>

                            <button className="w-full mt-5 btn bg-gradient text-white">Continue Booking</button>
                        </form>

                    </div>
                    <form method="dialog">
                        <button
                            onClick={closeModal}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default BookingModel;