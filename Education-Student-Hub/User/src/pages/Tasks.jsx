import React from "react";
import { CirclePlus } from "lucide-react";

import Todo from "../components/Todo";

export default function Tasks() {
  return (
    <div>
      <header className="font-bold text-2xl ml-10 mt-5">My Plan</header>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-12">
        <div className="p-2">
          <div className="font-bold text-3xl border-b-4 border-red-500 md:text-xl">
            Get Started
          </div>
          <button className="bg-gray-200 py-2 px-3 rounded-xl mt-2 flex gap-2 disabled">
            <CirclePlus />
            Add Task
          </button>
        </div>
        <div className="p-2">
          <Todo />
        </div>
        <div className=" p-2">
          <div className="font-bold text-3xl border-b-4 border-blue-500 md:text-xl">
            In Progress
          </div>
          <button className="bg-gray-200 py-2 px-3 rounded-xl mt-2 flex gap-2 disabled">
            <CirclePlus />
            Check Off Task
          </button>
        </div>
        <div className="p-2">
          <div className="font-bold text-3xl border-b-4 border-green-500 md:text-xl">
            Done
          </div>
        </div>
      </div>
    </div>
  );
}
