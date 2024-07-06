import React, { useState } from "react";
import { CirclePlus, Check, Trash2, X } from "lucide-react";

export default function Todo() {
  const [addTask, setAddTask] = useState(false);
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    setAddTask((curr) => !curr);
    setTask("");
  }

  function handleInputTask(e) {
    setTask(e.target.value);
  }

  function handleSaveTask(newTask) {
    if (newTask) {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTask("");
      setAddTask(false);
    }
  }

  function handleDeleteTask(givenTask) {
    setTasks((prevTasks) => prevTasks.filter((x) => x !== givenTask));
  }

  return (
    <>
      <div className="font-bold text-3xl border-b-4 border-yellow-500 md:text-xl">
        Todo
      </div>
      <ul className="mt-4">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="bg-gray-100 py-2 px-3 rounded-xl mt-2 break-words flex justify-between"
            style={{ wordBreak: "break-word" }}
          >
            {t}
            <button>
              <div className="flex gap-2">
                <Check onClick={() => console.log("Hi")} />
                <Trash2 onClick={() => handleDeleteTask(t)} />
              </div>
            </button>
          </li>
        ))}
      </ul>
      {!addTask ? (
        <button
          className="bg-gray-200 py-2 px-3 rounded-xl mt-2 flex gap-2"
          onClick={handleAddTask}
        >
          <CirclePlus />
          Add Task
        </button>
      ) : (
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Task"
            className="bg-gray-200 py-2 px-3 rounded-xl mt-2"
            value={task}
            onChange={handleInputTask}
          />
          <button >
            <div className="flex gap-1">
              <Check size={30} className="text-green-500" onClick={() => handleSaveTask(task)} />
              <X size={30} className="text-red-500" onClick={handleAddTask}/>
            </div>
          </button>
        </div>
      )}
    </>
  );
}
