import { baseApi } from "../../api/baseApi";



const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: '/signUp',
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: "POST",
                body: data
            })
        }),
    })
})



export const {useLoginMutation, useSignUpMutation} = authApi;