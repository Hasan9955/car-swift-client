import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


export type TUser = {
    userId: string;
    userEmail: string;
    photo: string;
    name: string;
    role: string;
    iat: number;
    exp: number;
}

type TInitialState = {
    user: null | TUser,
    token: null | string
}

const initialState: TInitialState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user
            state.token = token
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;