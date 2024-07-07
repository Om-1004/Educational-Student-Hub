import React from "react";
import { CirclePlus, Check, Trash2, X, MoveRight } from "lucide-react";

export default function InProgress({ inProgressTasks, handleDoneTask, setInProgressTasks}) {

  function handleDeleteTask(inProgressTask) {
    setInProgressTasks((prevTasks) => prevTasks.filter((x) => x !== inProgressTask));
  }

  return (
    <>
      <div className="font-bold text-3xl border-b-4 border-blue-500 md:text-xl">
        In Progress
      </div>
      <ul className="mt-4">
        {inProgressTasks.map((taskInProgress, index) => (
          <li
            key={index}
            className="bg-gray-100 py-2 px-3 rounded-xl mt-2 break-words flex justify-between border border-yellow-500"
            style={{ wordBreak: "break-word" }}
          >
            {taskInProgress}
            <button>
              <div className="flex gap-2">
                <MoveRight
                  onClick={() => handleDoneTask(taskInProgress)}
                  className="text-green-500"
                />
                <Trash2 onClick={() => handleDeleteTask(taskInProgress)} />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
