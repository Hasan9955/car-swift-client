import { baseApi } from "../../api/baseApi"


const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: (data) => ({
                url: "/users",
                method: "GET",
                body: data
            }),
            providesTags: ['allUsers']
        }),
        getSingleUser: builder.query({
            query: (id) => ({
                url: `/users/${id}`,
                method: "GET"
            }),
        }),
        addUser: builder.mutation({
            query: (userData) => {
                return {
                    url: "/users",
                    method: "POST",
                    body: userData
                }

            },
            invalidatesTags: ['allUsers']
        }),
        updateUser: builder.mutation({
            query: (userData) => {
                return {
                    url: `/users/${userData.id}`,
                    method: "PUT",
                    body: userData.data
                }

            },
            invalidatesTags: ['allUsers']
        }),
        deleteUser: builder.mutation({
            query: (id) => {
                return {
                    url: `/users/${id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ['allUsers']
        }),
    })
})


export const {
    useAddUserMutation, useDeleteUserMutation, useGetAllUsersQuery, useGetSingleUserQuery, useUpdateUserMutation } = userApi;