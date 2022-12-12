import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  tech: "React", 
  text: "React-Redux" 
}

const technologySlice = createSlice({
  name: 'technology',
  initialState,
  reducers: {
    setTechnology: (state, action) => {
      state.tech = action.payload
      //state.text = action.payload
      console.log(state.tech)
    }
  }
})

export default technologySlice.reducer
export const {setTechnology} = technologySlice.actions
