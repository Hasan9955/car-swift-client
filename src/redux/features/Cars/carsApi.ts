import { baseApi } from "../../api/baseApi";


const carsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCars: builder.query({
            query: (data) => ({
                url: "/cars/",
                method: "GET",
                data: data
            })
        })
    })
})


export const { useGetAllCarsQuery } = carsApi;