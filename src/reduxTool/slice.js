import { createSlice } from "@reduxjs/toolkit";


const collabtaskSlice=createSlice({
    name:"collabtask",
        initialState:{
        isLoggedIn:false,
    },
    reducers:{
        updateIsLoggedIn:(state,action)=>{
            state.isLoggedIn=action.payload;
        }
    }
})
export const{updateIsLoggedIn}=collabtaskSlice.actions;
export default collabtaskSlice.reducer