import { baseApi } from "../../api/baseApi"


const bookingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
            query: (data) => ({
                url: "/bookings",
                method: "GET",
                params: data
            }),
            providesTags: ['allBookings']
        }),
        getMyBookings: builder.query({
            query: (data) => ({
                url: `/bookings/my-bookings`,
                method: "GET",
                params: data
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
        returnBooking: builder.mutation({
            query: (returnData) => {
                return {
                    url: `/cars/return`,
                    method: "PUT",
                    body: returnData
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
        createPaymentIntent: builder.mutation({
            query: (data) => {
                return {
                    url: '/bookings/create-payment-intent',
                    method: "POST",
                    body: data
                }
            }
        })
    })
})


export const {
    useAddBookingMutation, useDeleteBookingMutation, useGetAllBookingsQuery, useGetSingleBookingQuery, useUpdateBookingMutation, useGetMyBookingsQuery, useReturnBookingMutation, useCreatePaymentIntentMutation } = bookingsApi;