import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAddCarMutation } from "../redux/features/Cars/carsApi"; 
import { toast } from "react-toastify";
import Swal from "sweetalert2";


type FormData = {
    name: string;
    image: string[];
    color: string;
    description: string;
    features: string[];
    isElectric: string;
    pricePerHour: string;
}

const AddCar = () => {



    const [addCar] = useAddCarMutation();
    const navigate = useNavigate();
    const [btnLoading, setBtnLoading] = useState(false);
    const [features, setFeatures] = useState<string[]>([]);
    const [newFeature, setNewFeature] = useState<string>("");
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_API_KEY}`

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<FormData>();

    const handleAddCar: SubmitHandler<FormData> = async (data) => {
        setBtnLoading(true)
        const { name,
            image,
            color,
            description,
            pricePerHour } = data;




        try {
            const formData = new FormData();
            formData.append('image', image[0]);
            const getImgUrl = await fetch(image_hosting_api, {
                method: 'POST',
                body: formData,
            })
            const imgData = await getImgUrl.json();
            const photo = imgData?.data?.display_url || "https://i.ibb.co.com/K7DLFv5/universal-car.jpg"

            const isElectric = data.isElectric === 'true' ? true : false
            const carData = {
                name,
                photo,
                color,
                description,
                features,
                isElectric,
                pricePerHour: parseInt(pricePerHour)
            }
            console.log(carData);

            const res = await addCar(carData)
            console.log(res);

            setBtnLoading(false)
            console.log(res?.data?.success);
            if (res?.data?.success) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Car added successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset()
                navigate('/admin-dashboard/manageCars')
            }
        } catch (error) {
            console.log(error);
            setBtnLoading(false)
            toast.error('Something went wrong!')
        }

    }


    // add a feature to the array
    const addFeature = () => {
        if (newFeature.trim()) {
            setFeatures([...features, newFeature]);
            setNewFeature(''); // Reset input after adding
        }
    };

    // remove a feature from the array
    const removeFeature = (index: number) => {
        setFeatures(features.filter((_, i) => i !== index));
    };


    return (
        <div>
            <div className="flex justify-center ">

                <form onSubmit={handleSubmit(handleAddCar)} className="bg-purple-100 w-full lg:w-3/4 md:mx-4 mx-2 p-5 my-10 rounded-lg">
                    <h2 className="text-3xl font-bold text-black text-center">Book a Parcel</h2>
                    <div className="grid md:grid-cols-2 gap-5">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <input
                                type="name"
                                className="input input-bordered"
                                placeholder="Enter Car Name"
                                {...register("name", { required: true })}
                            />
                            {errors.name?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * Car name is required
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full"
                                {...register("image", { required: true })}
                            />
                            {errors.image?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * Photo is required
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Color</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Enter car color"
                                {...register("color", { required: true })}
                            />
                            {errors.color?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * Car color is required
                                </p>
                            )}
                        </div>


                        {/* Car Features Section */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Features</span>
                            </label>
                            <div className="flex justify-center items-center space-x-2">
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                    placeholder="Enter car features"
                                    value={newFeature}
                                    onChange={(e) => setNewFeature(e.target.value)}
                                />
                                <button type="button" className="border border-gray-500 btn btn-sm text-xl text-green-400 font-extrabold" onClick={addFeature}>
                                    <FaPlusCircle />
                                </button>
                            </div>
                            {/* Display list of features */}
                            <ul className="mt-2 list-disc list-inside">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex justify-between items-center rounded-lg bg-gray-100 p-1 gap-2">
                                        {feature}
                                        <button type="button" className="text-red-400 font-extrabold border border-gray-500 p-1 rounded-lg" onClick={() => removeFeature(index)}>
                                            <MdCancel />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            {/* {errors.features?.type === "required" && (
                                <p className="text-red-400 font-bold text-center mt-1" role="alert">
                                    * Car features is required
                                </p>
                            )} */}
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Is Electric?</span>
                            </label> 
                            <select className="select select-bordered w-full"
                                {...register("isElectric", { required: true })}>
                                <option> </option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            </select >
                            {errors.isElectric?.type === "required" && (
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
                                <span className="label-text">Price Per Hour</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Enter price per hour"
                                {...register("pricePerHour", { required: true })}
                            />
                            {errors.pricePerHour?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * Enter price per hour!
                                </p>
                            )}
                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full"
                            placeholder="Enter Car Description"
                            {...register("description", { required: true })} />
                        {errors.description?.type === "required" && (
                            <p
                                className="text-red-400 font-bold text-center mt-1"
                                role="alert"
                            >
                                * Car description is required
                            </p>
                        )}
                    </div>
                    {
                        btnLoading ? <div className="flex justify-center items-center">
                            <span className="loading loading-bars loading-lg mx-auto mt-4"></span>
                        </div> : <input className="btn bg-gradient text-white w-full mt-4" type="submit" value="Book Now" />
                    }
                </form>
            </div>
        </div>
    );
};

export default AddCar;