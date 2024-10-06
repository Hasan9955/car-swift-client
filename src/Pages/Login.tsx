/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useForgetPasswordMutation, useLoginMutation } from "../redux/features/auth/authApi";
import { toast } from "react-toastify";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import Swal from "sweetalert2";


type FormData = {
    email: string;
    password: string;
}


const Login = () => {

    const [login] = useLoginMutation();
    const [forgetPassword] = useForgetPasswordMutation();
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm<FormData>();



    const handleLogin: SubmitHandler<FormData> = async (data) => {
        const { email, password } = data;

        const loginData = {
            email,
            password
        }
        try {
            const res = await login(loginData).unwrap();
            const user = verifyToken(res.token) as TUser
            dispatch(setUser({
                user,
                token: res.token
            }))
            toast.success('Login successfully!')
            navigate('/')
        } catch (error: any) {
            setError("Password doesn't matched")
            toast.error(error.data.message || 'Something went wrong')
        }
    }

    const handleForgetPassword = async () => {
        const email = watch("email")

        if (!email) {
            toast.error("Please enter your email first.");
            return;
        }

        try {
            const res = await forgetPassword({ email }).unwrap();
            if (res.success) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "An email sent to your inbox.",
                    text: 'Please check your inbox!',
                    showConfirmButton: true
                });
            }
        } catch (error: any) {
            toast.error(error.data.message || "Something went wrong.");
        }

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
                                placeholder="Enter your email"
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
                                placeholder="Enter your password"
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
                                <button type="button" className="label-text-alt link link-hover" onClick={handleForgetPassword}>
                                    Forgot password?
                                </button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-gradient text-white">Login</button>
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