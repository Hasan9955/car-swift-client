import { SubmitHandler, useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { useAppSelector } from '../../../redux/hook';
import { selectCurrentUser } from '../../../redux/features/auth/authSlice';
import { useGetSingleUserQuery, useUpdateUserMutation } from '../../../redux/features/user/userApi';
import { useEffect } from 'react';




interface FormData {
    name: string;
    photo: string[];
    address: string;
    phone: string;

}
const UserProfile = () => {

    const user = useAppSelector(selectCurrentUser);
    const [updateUser] = useUpdateUserMutation();
    const { data, refetch } = useGetSingleUserQuery(user?.userId)
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_API_KEY}`
    const modal = document.getElementById('my_modal_2') as HTMLDialogElement;

    const { handleSubmit, formState: { errors }, register, reset } = useForm<FormData>({
        defaultValues: {
            name: data?.data?.name,
            photo: data?.data?.photo,
            phone: data?.data?.phone,
            address: data?.data?.address
        }
    });


    useEffect(() => {
        if (data?.data) {
            reset({
                name: data?.data?.name,
                phone: data?.data?.phone,
                address: data?.data?.address
            })
        }
    }, [data?.data, reset])

    const onSubmit: SubmitHandler<FormData> = async (formValue) => {

        let photo = data?.data?.photo
        if (formValue.photo.length > 0) {
            const formData = new FormData();
            formData.append('image', formValue.photo[0]);
            const res = await fetch(image_hosting_api, {
                method: 'POST',
                body: formData,
            })
            const resData = await res.json();
            photo = resData?.data?.display_url
        }


        try {
            const userInfo = {
                id: data?.data?._id,
                data: {
                    photo,
                    name: formValue.name,
                    phone: formValue.phone,
                    address: formValue.address
                }
            }
            // console.log(userInfo);

            const res = await updateUser(userInfo).unwrap();
            // console.log(res);
            if (res.success) {
                modal.close();
                refetch();
                reset({
                    name: data?.data?.name,
                    phone: data?.data?.phone,
                    address: data?.data?.address
                })
                Swal.fire({
                    icon: "success", 
                    text: "Your data updated successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            // console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please try again later!",
            });
            reset();
            modal.close()
        }


    }


    return (
        <div className="p-3 md:p-10 mt-10">
            <h1 className="text-2xl md:text-3xl font-bold my-5 text-center md:text-start">Hi {data?.data?.name}, Welcome Back!</h1>
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
                <div className="avatar">
                    <div className="w-40 md:w-56 rounded-full ring  ring-offset-base-100 z-[-5] ring-offset-2">
                        <img src={data?.data?.photo} />
                    </div>
                </div>
                <div className="flex justify-center md:items-start items-center flex-col">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">{data?.data?.name}</h2>
                    <p className="md:text-xl font-bold">{data?.data?.email}</p>
                    <p className="">Phone: {data?.data?.phone}</p>
                    <p className="">Address: {data?.data?.address}</p>


                    {/* MODAL */}


                    <button className="btn bg-gradient text-white w-full mt-3 md:mt-10" onClick={() => { modal.showModal() }
                    }
                    >Update Profile</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h2 className="text-center text-2xl font-bold">Update Profile</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input required className="input input-bordered" {...register("name", { required: true })} />
                                    {errors.name?.type === "required" && (<p className='text-red-600 font-bold text-center' role="alert">Name is required !!!</p>)}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="file" className="file-input file-input-bordered w-full" {...register("photo")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input required className="input input-bordered" {...register("phone", { required: true })} />
                                    {errors.phone?.type === "required" && (<p className='text-red-600 font-bold text-center' role="alert">Phone is required !!!</p>)}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input required className="input input-bordered" {...register("address", { required: true })} />
                                    {errors.address?.type === "required" && (<p className='text-red-600 font-bold text-center' role="alert">Address is required !!!</p>)}
                                </div>
                                <input className="btn bg-gradient text-white w-full mt-5" type="submit" value="Update" />
                            </form>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;