import { createSlice } from "@reduxjs/toolkit";
import { contacts } from "../../static-data";

const initialState = {
    listContacts: contacts
}

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
    }
})

export const {display} = contactSlice.actions
export default contactSlice.reducer