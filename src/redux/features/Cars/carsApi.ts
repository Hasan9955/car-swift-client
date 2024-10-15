import { baseApi } from "../../api/baseApi";


const carsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCars: builder.query({
            query: (data) => ({
                url: `/cars?date=${data?.date}&startTime=${data?.time}`,
                method: "GET"
            }),
            providesTags: ['allCars']
        }),
        getSingleCar: builder.query({
            query: (id) => ({
                url: `/cars/${id}`,
                method: "GET"
            }), 
        }),
        addCar: builder.mutation({
            query: (carData) => { 
                return {
                    url: "/cars",
                    method: "POST",
                    body: carData
                }

            },
            invalidatesTags: ['allCars']
        }),
        updateCar: builder.mutation({
            query: (carData) => { 
                return {
                    url: `/cars/${carData.id}`,
                    method: "PUT",
                    body: carData.data
                }

            },
            invalidatesTags: ['allCars']
        }),
        deleteCar: builder.mutation({
            query: (id) => { 
                return {
                    url: `/cars/${id}`,
                    method: "DELETE", 
                }
            },
            invalidatesTags: ['allCars']
        }),
    })
})


export const { useGetAllCarsQuery, useAddCarMutation, useDeleteCarMutation, useGetSingleCarQuery, useUpdateCarMutation } = carsApi;