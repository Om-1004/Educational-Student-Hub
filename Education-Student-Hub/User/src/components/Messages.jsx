import React from 'react'
import {UserRoundPlus, UserSearch} from "lucide-react"

export default function Messages() {
  return (
    <div className="w-[33%] border min-h-screen">

      <form className='shadow-md p-4 rounded-lg flex items-center w-full'>
        <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none '/>
        <button type='submit'>
            <UserSearch className='text-slate-600' />
        </button>
      </form>
      
      <div className="flex flex-col mt-4 ">
        <p>First User</p>
        <p>Second User</p>
        <p>Third User</p>
        <p>Fourth User</p>
        <p>Fifth User</p>
      </div>
    </div>
  );
}