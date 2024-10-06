import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useResetPasswordMutation } from "../redux/features/auth/authApi";
import Swal from "sweetalert2";

type FormData = {
    email: string;
    newPassword: string;
}
const ResetPassword = () => {

    const [postResetPassword] = useResetPasswordMutation();
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<FormData>();
    const [params] = useSearchParams(); 
    const token = params.get("token"); 


    const handleResetPassword: SubmitHandler<FormData> = async(data) => {
        const { email, newPassword } = data;

        const resetData = {
            email,
            newPassword,
            token
        }

        try {
            const res = await postResetPassword(resetData).unwrap()

            if(res.success){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Password reset successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/login')
            }
        } catch (error) { 
            if(error){
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Something went wrong!",
                    text: 'Please try again later.',
                    showConfirmButton: false,
                    timer: 1500
                  }); 
            }
        }
    }
    return (
        <div className="max-w-xl mx-auto p-5">
            <div className=" ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5 text-center">Reset your password!</h1>
                </div>
                <div className="bg-base-100 w-full min-w-xl shadow-2xl">
                    <form
                        onSubmit={handleSubmit(handleResetPassword)}
                        className="card-body">
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
                                <span className="label-text">New Password</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered"
                                placeholder="Enter your new password"
                                {...register("newPassword", { required: true })}
                            />
                            {errors.newPassword?.type === "required" && (
                                <p
                                    className="text-red-400 font-bold text-center mt-1"
                                    role="alert"
                                >
                                    * New Password is required
                                </p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-gradient text-white">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;

