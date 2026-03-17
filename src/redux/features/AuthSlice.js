import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null , // LOGGED IN USER DATA
    isAuthenticated : false, // auth status
};

const authSlice = createSlice({
name : "auth",
initialState,
reducers:{
    // signUp
    signUp :(state , action)=>{
        state.user = action.payload;
        state.isAuthenticated = false;
    },
    //login
    login :(state , action)=>{
        state.user = action.payload;
        state.isAuthenticated= true;
    },
    //logOut
    logout :(state)=>{
        state.user = null;
        state.isAuthenticated = false
    },
} ,   
})

export const {signUp ,login , logout } = authSlice.actions
export default authSlice.reducer