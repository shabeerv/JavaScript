import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    typingValue: ''
}

const typingSlice = createSlice({
    name: 'typing',
    initialState,
    reducers:{
        setTypingValue: (state, action) => {
            state.typingValue = action.payload
        },
        clearField: (state) => {
            state.typingValue = ''
        }
    }
})

export const { setTypingValue, clearField } = typingSlice.actions
export default typingSlice.reducer