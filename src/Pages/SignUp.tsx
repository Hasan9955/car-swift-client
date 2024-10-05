import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


type FormData = {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
}


const SignUp = () => {

    const navigate = useNavigate();
    const [error, setError] = useState('asd')
    const [emailError, setEmailError] = useState('adsf')

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<FormData>();



    const handleSignUp: SubmitHandler<FormData> = (data) => {
        const { email, password, phone, name, address } = data;

        setError('')
        setEmailError('') 
        navigate('/signUp')
        if (!/^(?=.*[A-Z]).{6,}$/.test(password)) {
            return setError('please provide  at last 6 character')
        }
        console.log({ email, password, phone, name, address }); 
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
                            <button className="btn bg-gradient text-white">Sign Up</button>
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