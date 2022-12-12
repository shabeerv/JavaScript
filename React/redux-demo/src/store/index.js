import { configureStore } from "@reduxjs/toolkit";
import technologyReducer from "../reducers/technologyReducer";

export const store = configureStore({
    reducer: {
        technology: technologyReducer,
    }
})