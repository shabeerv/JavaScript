import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latestError: "",
};

const errorsSlice = createSlice({
  name: "error",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        return action.type.endsWith("/rejected");
      },
      (state, { payload, type }) => {
        state.latestError = payload?.data;
        console.log(payload.message)
        state[type.replaceAll("/rejected", "")] = payload?.data;
        return state;
      }
    );
  },
});

export default errorsSlice.reducer;