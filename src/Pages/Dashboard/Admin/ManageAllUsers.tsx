import { MdAdminPanelSettings, MdErrorOutline } from "react-icons/md";
import IsError from "../../../Components/IsError";
import IsLoading from "../../../Components/IsLoading/IsLoading";
import { User } from "../../../Interface/Index";
import { useDeleteUserMutation, useGetAllUsersQuery, useUpdateUserMutation } from "../../../redux/features/user/userApi";
import Swal from "sweetalert2";


const ManageAllUsers = () => {

    const { data, isError, isLoading } = useGetAllUsersQuery(undefined);
    const [changeRole] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();

    if (isLoading) {
        return <IsLoading dashboard={true} />
    }
    if (isError) {
        return <IsError />
    }


    const handleDelete = async (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteUser(id);
                if (res.data.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                    });
                } 
            }
        }); 
    }

    const makeAdmin = async (id: string) => {
        const updateRole = {
            role: 'admin'
        }
        const updatedData = {
            id: id,
            data: updateRole
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this user admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await changeRole(updatedData);
                if (res.data.success) {
                    Swal.fire({
                        title: "Successful!",
                        text: "Admin added successfully.",
                        icon: "success"
                    });
                } 
            }
        }); 
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Make Admin</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                {
                    data?.data?.length && data?.data?.map((user: User) => <tbody key={user._id}>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photo}
                                                alt="User's photo" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                        <div className="text-sm opacity-50">{user.address}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.email}
                                <br />
                                <span className="badge badge-ghost badge-sm">{user.phone}</span>
                            </td>
                            <td>
                                {
                                    user.role === 'admin' ? <p className="uppercase btn btn-xs no-animation text-green-600 font-bold text-md">{user.role}</p> : <div>
                                        <button onClick={() => makeAdmin(user._id)} className="btn btn-success text-white">
                                            <MdAdminPanelSettings className="text-3xl">
                                            </MdAdminPanelSettings >
                                        </button><br />
                                    </div>
                                }
                            </td>
                            <td>
                                <button onClick={() => handleDelete(user._id)} className="btn btn-error text-white ">
                                    <MdErrorOutline className="text-lg">
                                    </MdErrorOutline > Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
    );
};

export default ManageAllUsers;