import { baseApi } from "../../api/baseApi";



const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: '/auth/signUp',
                method: "POST",
                body: data
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: "POST",
                body: data
            })
        }),
        forgetPassword: builder.mutation({
            query: (data) => ({
                url: '/auth/forgetPassword',
                method: "POST",
                body: data
            })
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: '/auth/resetPassword',
                method: "POST",
                body: data
            })
        }),
    })
})



export const {useResetPasswordMutation, useLoginMutation, useSignUpMutation, useForgetPasswordMutation} = authApi;