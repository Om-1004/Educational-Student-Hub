import React from 'react'
import Messages from "../components/Messages.jsx"
import ChatNavbar from "../components/ChatNavbar.jsx"
import Chat from '../components/Chat.jsx'

export default function Dashboard() {
  return (
    <div >
      <div className="flex flex-wrap">
        <ChatNavbar />
        <Chat />
      </div>
      
      <Messages />
      
    </div>
  )
}
