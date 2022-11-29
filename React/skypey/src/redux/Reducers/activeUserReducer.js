import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeUserId: null
}

export const activeUserSlice = createSlice({
    name: 'activeUser',
    initialState,
    reducers: {
        setActiveUserId: (state, action) => {
            state.activeUserId = action.payload
        }
    }
})

export const {setActiveUserId} = activeUserSlice.actions
export default activeUserSlice.reducer