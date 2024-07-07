import React, { useState } from "react";
import { CirclePlus } from "lucide-react";

import Todo from "../components/Todo";
import InProgress from "../components/InProgress";
import Done from "../components/Done";

export default function Tasks() {
  const [addTask, setAddTask] = useState(false);
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  function handleInProgressTask(inProgressTask) {
    setInProgressTasks((prevInProgressTask) => [
      ...prevInProgressTask,
      inProgressTask,
    ]);
    setTasks((prevTasks) =>
      prevTasks.filter((toDoTask) => toDoTask !== inProgressTask)
    );
  }

  function handleDoneTask(doneTask) {
    setDoneTasks((prevDoneTasks) => [...prevDoneTasks, doneTask]);
    setInProgressTasks((prevInProgressTasks) =>
      prevInProgressTasks.filter(
        (inProgressTask) => inProgressTask !== doneTask
      )
    );
  }

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
          <Todo
            addTask={addTask}
            setTasks={setTasks}
            task={task}
            tasks={tasks}
            setAddTask={setAddTask}
            setTask={setTask}
            handleInProgressTask={handleInProgressTask}
          />
        </div>
        <div className=" p-2">
          <InProgress
            inProgressTasks={inProgressTasks}
            handleDoneTask={handleDoneTask}
            setInProgressTasks={setInProgressTasks}
          />

          <button className="bg-gray-200 py-2 px-3 rounded-xl mt-2 flex gap-2 disabled">
            <CirclePlus />
            Check Off Task
          </button>
        </div>
        <div className="p-2">
          <Done doneTasks={doneTasks} />
        </div>
      </div>
    </div>
  );
}
