

import { SubmitHandler, useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import { Navigate, useLocation } from "react-router-dom";


type FormData = {
    date: string;
    startTime: string;
    endTime: string;
}  

const CreateBooking = () => {

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<FormData>();

    const location = useLocation();
    const carData = location.state();
    if(!carData){
        return <Navigate to={'/cars'} />
    }
    console.log(carData);
    const handleFindCar: SubmitHandler<FormData> = (data) => {

        const { date, startTime, endTime } = data;

        
    }

    return (
        <div className="my-10 max-w-2xl mx-auto px-2">
            <form
                onSubmit={handleSubmit(handleFindCar)}
                className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input
                            type="date"
                            className="input input-bordered"
                            placeholder="Enter date"
                            {...register("date", { required: true })}
                        />
                        {errors.date?.type === "required" && (
                            <p
                                className="text-red-400 font-bold text-center mt-1"
                                role="alert"
                            >
                                * Date is required
                            </p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Start Time</span>
                        </label>
                        <select className="select select-bordered max-h-40 overflow-x-auto"
                            {...register("startTime", { required: true })}>
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
                            <option selected value='10:00'>10:00 AM</option>
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
                        {errors.startTime?.type === "required" && (
                            <p
                                className="text-red-400 font-bold text-center mt-1"
                                role="alert"
                            >
                                * Select an option!
                            </p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">End Time</span>
                        </label>
                        <select className="select select-bordered max-h-40 overflow-y-auto"
                            {...register("endTime", { required: true })}>
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
                            <option selected value='17:00'>05:00 PM</option>
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
                        {errors.endTime?.type === "required" && (
                            <p
                                className="text-red-400 font-bold text-center mt-1"
                                role="alert"
                            >
                                * Select an option!
                            </p>
                        )}
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn bg-gradient rounded-full text-white">Find Car <FaArrowRight /></button>
                </div>
            </form>
        </div>
    );
};

export default CreateBooking;