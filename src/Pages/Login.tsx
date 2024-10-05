import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";


type FormData = {
    email: string;
    password: string;
}


const Login = () => {

    const [error, setError] = useState('')
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<FormData>();



    const handleLogin: SubmitHandler<FormData> = (data) => {
        const { email, password } = data;
        setError('adlkj')
        console.log({ email, password });
    }

    return (
        <div className="max-w-xl mx-auto p-5">
            <div className=" ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5 text-center">Login now!</h1>
                </div>
                <div className="bg-base-100 w-full min-w-xl shadow-2xl">
                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className="card-body"> 
                         {
                            error && <div><p className="text-red-500 justify-center flex mt-3">Email or password invalid !!!</p></div>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered"
                                {...register("email", { required: true })}
                            />
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
                                {...register("password", { required: true })}
                            />
                            {errors.password?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * Password is required
                                </p>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient text-white">Login</button>
                        </div>
                    </form>
                    <div className="mx-auto mb-5 pb-5 text-center">
                        <p >Don't have an account? <Link className="font-extrabold text-blue-600" to='/signUp'>SignUp</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;