import { baseApi } from "../../api/baseApi"



const bookingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
            query: (data) => ({
                url: "/bookings",
                method: "GET",
                body: data
            }),
            providesTags: ['allBookings']
        }),
        getSingleBooking: builder.query({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: "GET"
            }),
        }),
        addBooking: builder.mutation({
            query: (userData) => {
                return {
                    url: "/bookings",
                    method: "POST",
                    body: userData
                }

            },
            invalidatesTags: ['allBookings']
        }),
        updateBooking: builder.mutation({
            query: (userData) => {
                return {
                    url: `/bookings/${userData.id}`,
                    method: "PUT",
                    body: userData.data
                }

            },
            invalidatesTags: ['allBookings']
        }),
        deleteBooking: builder.mutation({
            query: (id) => {
                return {
                    url: `/bookings/${id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ['allBookings']
        }),
    })
})


export const {
    useAddBookingMutation, useDeleteBookingMutation, useGetAllBookingsQuery, useGetSingleBookingQuery, useUpdateBookingMutation } = bookingsApi;