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
        getMyBookings: builder.query({
            query: () => ({
                url: `/bookings/my-bookings`,
                method: "GET"
            }),
        }),
        getSingleBooking: builder.query({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: "GET"
            }),
        }),
        addBooking: builder.mutation({
            query: (bookingData) => {
                return {
                    url: "/bookings",
                    method: "POST",
                    body: bookingData
                }

            },
            invalidatesTags: ['allBookings']
        }),
        updateBooking: builder.mutation({
            query: (bookingData) => {
                return {
                    url: `/bookings/${bookingData.id}`,
                    method: "PUT",
                    body: bookingData.data
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
    useAddBookingMutation, useDeleteBookingMutation, useGetAllBookingsQuery, useGetSingleBookingQuery, useUpdateBookingMutation, useGetMyBookingsQuery } = bookingsApi;