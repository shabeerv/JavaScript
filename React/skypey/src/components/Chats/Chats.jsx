import React, { useRef, useEffect } from 'react'
import './Chats.css'

const Chat = ({ message }) => {
    const { text, is_user_msg } = message
        
    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
    )
}

const Chats = ({ messages }) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }
    
      useEffect(() => {
        scrollToBottom()
      }, [messages]);    

    return (
        <div className='Chats'>
            {messages.map(message => (
                <Chat message={message} key={message.number} />
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}

export default Chats;