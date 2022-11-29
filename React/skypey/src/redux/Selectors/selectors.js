const getContacts = (state) => state.contacts.listContacts
const getUser = (state) => state.users.listUser
const getActiveUserId = (state) => state.activeUser.activeUserId
const getMessages = (state) => state.messages.listMessages
const getTyping = (state) => state.typing.typingValue

export {getContacts, getUser, getActiveUserId, getMessages, getTyping}