import React from 'react'
import Header from '../Header'
import { useSelector } from 'react-redux'
import { getContacts, getMessages, getTyping } from '../../redux/Selectors/selectors'
import _ from 'lodash'
import Chats from '../Chats'
import './ChatWindow.css'
import MessageInput from '../MessageInput'

const ChatWindow = ({ activeUserId }) => {

    const contacts = useSelector(getContacts)
    const messages = useSelector(getMessages)
    const typing = useSelector(getTyping)
    const activeUser = contacts[activeUserId]
    const activeMsgs = messages[activeUserId]

    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsgs)}/>
            <MessageInput value={typing} />
        </div>
  )
}

export default ChatWindow