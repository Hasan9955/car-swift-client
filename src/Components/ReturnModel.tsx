/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAppSelector } from "../redux/hook";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useReturnBookingMutation } from "../redux/features/bookings/bookingsApi";
import Swal from "sweetalert2"; 
import { TBookings } from "../Interface/Index";

interface ReturnModelProps {
    bookingData: TBookings;
    closeModal: () => void;
}

const ReturnModel: React.FC<ReturnModelProps> = ({
    bookingData,
    closeModal,
}) => {

    const [returnBooking] = useReturnBookingMutation();
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

    const handleReturn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        
        const endTime = formData.get("endTime") as string; 

        const returnData = { 
            bookingId: bookingData._id,
            endTime
        }; 

        try {
            const res = await returnBooking(returnData).unwrap();
            // console.log(res);
             
            if (res.success) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Car returned successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            closeModal();
        } catch (error: any) { 
            // console.log(error);
            Swal.fire({
                position: "center",
                icon: "error", 
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
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center mb-5">
                        Fill up return info. 
                    </h3>
                    <div className="flex justify-center items-center gap-5">
                        <form onSubmit={handleReturn}> 
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Return Time</span>
                                </label>
                                <select required className="w-96 select select-bordered max-h-40 overflow-x-auto"
                                    name="endTime">
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
                            <button className="w-full mt-5 btn bg-gradient text-white">Return</button>
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

export default ReturnModel;