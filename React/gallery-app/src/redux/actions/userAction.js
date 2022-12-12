import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import httpClient from '../../controllers/httpClient';
import { LOGIN } from '../../helpers/constants';

export const actionTypes = {
    LOGIN: "user/LOGIN",
    LOGOUT: "user/LOGOUT",
}

export const login = createAsyncThunk(actionTypes.LOGIN, async ({email, password}, { rejectWithValue }) => {
    try {
        const response = await httpClient.post(LOGIN, {email, password})
        return response.data
    }
    catch(error) {
        return rejectWithValue(error)
    }
})

export const logout = createAction(actionTypes.LOGOUT)