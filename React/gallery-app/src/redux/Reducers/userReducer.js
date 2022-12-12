import { createSlice } from '@reduxjs/toolkit'
import { login } from '../actions/userAction'

const initialState = {
    loading: false,
    error: '',
    accessToken: null,
    isAuth: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => {
            return initialState;
            //localStorage.removeItem('persist:root')
            //return initialState
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(userLogin.pending, state => {
        //     state.loading = true
        // })
        builder.addCase(login.fulfilled, (state, {payload}) => {
            state.loading = false
            const token = payload.access_token
            //console.log(token)
            state.accessToken = token
            state.isAuth = true
            state.error = ''
        })
        // builder.addCase(logout, () => {
        //     return initialState;
        // })
        // builder.addCase(userLogin.rejected, (state, action) => {
        //     state.loading = false
        //     state.error = action.error.message
        // })
    }
})

export const {logout} = userSlice.actions

export default userSlice.reducer