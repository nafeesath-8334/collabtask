import { configureStore } from "@reduxjs/toolkit";
import collabtaskReducer from "./slice";
export const store= configureStore({
    reducer:{
        collabtask:collabtaskReducer,
    }
})