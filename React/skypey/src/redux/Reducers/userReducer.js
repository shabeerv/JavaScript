import { generateUser } from '../../static-data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listUser: generateUser()
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const {display} = userSlice.actions
export default userSlice.reducer