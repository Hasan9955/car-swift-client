import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


export type TUser = {
    userId: string;
    email: string;
    role: string;
    name: string;
}

type TInitialState = {
    user: null | TUser
}

const initialState: TInitialState = {
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user } = action.payload;
            state.user = user
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
