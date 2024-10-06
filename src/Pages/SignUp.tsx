/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";


type FormData = {
    name: string;
    email: string;
    password: string;
    phone: string;
    photo: string[];
    address: string;
}


const SignUp = () => {

    const navigate = useNavigate();
    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState('')
    const [emailError, setEmailError] = useState('')
    const dispatch = useAppDispatch();
    const [signUp] = useSignUpMutation();
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=472169b2b544c9c198fdbb1a8eb5245e`
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<FormData>();



    const handleSignUp: SubmitHandler<FormData> = async (data) => {
        setBtnLoading(true)
        const { email, password, phone, name, address } = data;

         
        const formData = new FormData();
        formData.append('image', data.photo[0]);
        const res = await fetch(image_hosting_api, {
            method: 'POST',
            body: formData,
        })
        const resData = await res.json();
        const photo = resData?.data?.display_url 

        setError('')
        setEmailError('')
        navigate('/signUp')
        if (!/^(?=.*[A-Z]).{6,}$/.test(password)) {
            return setError('please provide  at last 6 character')
        }
        const userData = {
            email,
            password,
            phone,
            photo,
            name,
            address
        };

        try {
            const res = await signUp(userData).unwrap();  
            const user = verifyToken(res.token) as TUser  
            dispatch(setUser({
                user,
                token: res.token
            }))
            setBtnLoading(false)
            toast.success('Sign up Successfully!!!')
            navigate("/")
        } catch (error: any) {
            console.log(error);
            if(error?.data?.message?.includes('Duplicate value given!')){
                setEmailError(error)
                toast.error("This email is already registered!") 
                setBtnLoading(false)
                return
            }
            setBtnLoading(false)
            toast.error('An error is going on!')
        }
    }
    return (
        <div className="max-w-xl mx-auto p-5">
            <div className=" ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5 text-center">Sign up now!</h1>
                </div>
                <div className="bg-base-100 w-full min-w-xl shadow-2xl">
                    <form
                        onSubmit={handleSubmit(handleSignUp)}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Enter your name"
                                {...register("name", { required: true })}
                            />
                            {errors.name?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * Name is required
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                            <label >
                                {
                                    emailError && <h2 className="text-red-400 text-center">This email is already registered.</h2>
                                }
                            </label>
                            {errors.email?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * Email is required
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Enter password"
                                {...register("password", { required: true })}
                            />
                            <label className="label">
                                {
                                    error &&
                                    <ul className="text-red-400 list-disc text-sm font-bold">
                                        <li>Minimum six in length.</li>
                                        <li>At least one upper case letter.</li>
                                    </ul>
                                }
                            </label>
                            {errors.password?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * Password is required
                                </p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Your phone No."
                                {...register("phone", { required: true })}
                            />
                            {errors.phone?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * Phone number is required
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
                                {...register("photo", { required: true })}
                            />
                            {errors.phone?.type === "required" && (
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
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Your address"
                                {...register("address", { required: true })}
                            />
                            {errors.address?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * Address number is required
                                </p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            {
                                btnLoading ? <span className="loading loading-bars loading-lg mx-auto"></span> : <button className="btn bg-gradient text-white">Sign Up</button>}
                        </div>
                    </form>
                    <div className="mx-auto mb-5 pb-5 text-center">
                        <p >Already have an account? <Link className="font-extrabold text-blue-600" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;