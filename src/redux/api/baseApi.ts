/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { logout, setUser } from '../features/auth/authSlice'; 

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://car-rental-server-eight.vercel.app/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token

        if(token){
            headers.set('authorization', `bearer ${token}`)
        }

        return headers;
    }
})


const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
    let result: any = await baseQuery(args, api, extraOptions)
 
    // if (result?.error?.status === 404) {
    //     toast.error(result?.error?.data?.message || 'Something went wrong!');
    //     api.dispatch(logout());
    //   }
      // if (result?.error?.status === 403) {
      //   // toast.error(result?.error?.data?.message || 'Something went wrong!');
      // }
      // if (result?.error?.status === 401 || result?.error?.status === 400 || result?.error?.status === 403) {  
      if (result?.error?.status === 401) {  
    
        const res = await fetch('https://car-rental-server-eight.vercel.app/api/auth/refresh-token', {
          method: 'POST',
          credentials: 'include',
        });
    
        const data = await res.json(); 
        if (data?.data?.accessToken) {
          const user = (api.getState() as RootState).auth.user;
    
          api.dispatch(
            setUser({
              user,
              token: data.data.accessToken,
            })
          );
    
          result = await baseQuery(args, api, extraOptions);
        } else {
          console.log('log out because refresh token not working!', data);
          api.dispatch(logout());
        }
      }
     
    return result;
}

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
    tagTypes: ['allCars', 'allUsers', 'allBookings']
})


