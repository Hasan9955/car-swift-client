import { SubmitHandler, useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


type FormData = {
    date: string;
    startTime: string;
}

const Banner = () => {

    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<FormData>();

    const handleFindCar: SubmitHandler<FormData> = (data) => {

        const { date, startTime } = data;
        const bookingInfo = {
            date,
            startTime
        }

        navigate('/cars', {
            state: bookingInfo
        })

    }

    return (
        <div className="relative flex justify-center items-center w-full ">
            <div className="w-full video-container h-64 sm:h-96 md:h-[400px] lg:h-[500px]">
                <video playsInline autoPlay loop muted preload="auto" className="w-full h-full object-cover">
                    <source src="https://www.lxvcars.com/wp-content/uploads/2024/06/LXV-CARS-v6.3.mp4#t=5" type="video/mp4" />
                </video>

                {/* <video playsInline autoPlay loop muted className="w-full h-full object-cover">
                <source src="https://duruthemes.com/demo/html/renax/video.mp4" type="video/mp4" />
                <source src="https://duruthemes.com/demo/html/renax/video.webm" type="video/webm" />
            </video> */}
            </div>
            <div className="absolute my-10 mx-auto px-2 w-full bg-black bg-opacity-60 h-full">
                <h1 className="text-md [425px]:text-xl md:text-3xl lg:text-4xl first-line:font-bold md:mb-5 text-center mt-10 md:mt-28 lg:mt-36 text-white">Find Car With Your Suitable Time!</h1>
                <form
                    onSubmit={handleSubmit(handleFindCar)}
                    className="flex flex-col justify-center items-center max-w-64 md:max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 mt-4 md:mt-0 md:grid-cols-2 gap-2 md:gap-5 w-full">
                        <div className="form-control">
                            <label className="hidden md:flex label">
                                <span className="label-text text-white">Date</span>
                            </label>
                            <input
                                type="date"
                                className="input input-sm md:input-md input-bordered"
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
                            <label className="hidden md:flex label">
                                <span className="label-text text-white">Time</span>
                            </label>
                            <select className="select select-bordered select-sm md:select-md max-h-40 overflow-x-auto"
                                {...register("startTime", { required: true })}>
                                <option>Select time...</option>
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
                            {errors.startTime?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * Select an option!
                                </p>
                            )}
                        </div>

                    </div>
                    <div className="form-control mt-4 md:mt-6">
                        <button type="submit" className="btn bg-gradient rounded-full text-white border-none btn-sm md:btn-md">Find Car <FaArrowRight /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Banner;