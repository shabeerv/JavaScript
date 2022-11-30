import React from 'react'
import { getActiveUserId, getTyping } from '../../redux/Selectors/selectors'
import { useSelector, useDispatch } from 'react-redux'
import './MessageInput.css'
import { setTypingValue } from '../../redux/Reducers/typingReducer'
import { sendMessage } from '../../redux/Reducers/messageReducer'
import { clearField } from '../../redux/Reducers/typingReducer'

const MessageInput = ({ value }) => {

    const dispatch = useDispatch()
    const typing = useSelector(getTyping)
    const activeUserId = useSelector(getActiveUserId)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(sendMessage({typing, activeUserId}))
        dispatch(clearField())
    }

    const handleChange = e => {
       dispatch(setTypingValue(e.target.value))
    }

    return (
        <form className='Message' onSubmit={handleSubmit}>
            <input
                key={activeUserId}
                name='chat'
                className='Message__input'
                onChange={handleChange}
                value={value}
                placeholder='write a message'
                autoFocus
            />
        </form>
    )
}

export default MessageInput