import React from 'react'

export default function Tasks() {
  return (
    <div>
      <header className="font-bold text-2xl ml-10 mt-5">My Plan</header>
<div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-12">
  <div className="p-2">
    <div className="font-bold text-3xl border-b-4 border-red-500">Get Started</div>
    <ul className="mt-2">
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
  </div>
  <div className="p-2">
    <div className="font-bold text-3xl border-b-4 border-yellow-500 ">Todo</div>
    <ul className="mt-2">
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
  </div>
  <div className=" p-2">
    <div className="font-bold text-3xl border-b-4 border-blue-500">In Progress</div>
    <ul className="mt-2">
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
  </div>
  <div className="p-2">
    <div className="font-bold text-3xl border-b-4 border-green-500 ">Done</div>
    <ul className="mt-2">
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
  </div>
</div>

    </div>
  )
}
