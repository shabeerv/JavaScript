import { createSlice } from "@reduxjs/toolkit";
import { fetchImages } from "../actions/imageAction";

const initialState = {
    images: [],
    count: 999,
    loading: false,
    error: ''
}

const imageSlice = createSlice({
    name: 'image',
    initialState,
    extraReducers: (builder) => {
        // builder.addCase(fetchImages.pending, state => {
        //     state.loading = true
        // })
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            state.loading = false
            state.images = action.payload
            state.error = ''
        })
        // builder.addCase(fetchImages.rejected, (state, action) => {
        //     state.loading = false
        //     state.images = []
        //     state.error = action.error.message
        // })
    }
})

export default imageSlice.reducer