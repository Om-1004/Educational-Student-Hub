import React from 'react'
import {UserRoundPlus} from "lucide-react"

export default function ChatNavbar() {
  return (
    <div className="flex sm:flex-row sm:flex-wrap w-[33%] border justify-between items-center p-5 bg-gray-100 bg-opacity-50">
        <h1 className="font-semibold text-2xl">Messages</h1>
        <button>
        <UserRoundPlus/>
        </button>
  </div>
  )
}
