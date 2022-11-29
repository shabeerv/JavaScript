import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { getMessages } from "../../static-data";

const initialState = {
    listMessages: getMessages(10)
}

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        sendMessage: (state, action) => {
            const { typing, activeUserId } = action.payload
            const allUserMsgs = state.listMessages[activeUserId]
            const number = +_.keys(allUserMsgs).pop() + 1;
            
            state.listMessages = {
                ...state,
                [activeUserId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: typing,
                        is_user_msg: true
                    }
                }
            }
        }
    }
})

export const { sendMessage } = messageSlice.actions
export default messageSlice.reducer