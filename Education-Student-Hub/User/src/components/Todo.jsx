// Todo.js
import React, { useState } from "react";
import { CirclePlus, Check, X, Edit2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { updateTasks } from "../redux/user/userSlice";

export default function Todo() {
  const [displayTitle, setDisplayTitle] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editMode, setEditMode] = useState(false);

  const tasks = useSelector((state) => state.user.tasks || {});
  const dispatch = useDispatch();

  const taskTitles = Object.keys(tasks);

  function displayTask() {
    setDisplayTitle((curr) => !curr);
  }

  function handleCheckClick() {
    if (title.trim() === "" || description.trim() === "") return;

    dispatch(updateTasks({ title, description, previousTitle: editMode }));

    setTitle("");
    setDescription("");
    setDisplayTitle(true);
    setEditMode(false);
  }

  function handleXClick() {
    setTitle("");
    setDescription("");
    setDisplayTitle(true);
    setEditMode(false);
  }

  function handleTaskClick(title) {
    setEditMode(title);
    setTitle(title);
    setDescription(tasks[title].description);
    setDisplayTitle(false);
  }

  return (
    <>
      <div className="font-bold text-3xl border-b-4 border-yellow-500 md:text-xl">
        Todo
      </div>

      <ul className="flex flex-col gap-3">
        {taskTitles.map((title, index) => (
          <li
            className="bg-gray-100 py-2 px-3 rounded-xl mt-2 break-words flex justify-between border border-yellow-500 cursor-pointer"
            key={index}
            onClick={() => handleTaskClick(title)}
          >
            {title}
            {editMode === title && <Edit2 className="ml-2" /> }
          </li>
        ))}
      </ul>

      <div>
        {displayTitle ? (
          <button
            className="bg-gray-200 py-2 px-3 rounded-xl mt-2 flex gap-2"
            onClick={displayTask}
          >
            <CirclePlus />
            Add Task
          </button>
        ) : (
          <div className="flex flex-col gap-3 bg-gray-300 px-3 rounded-lg pb-5">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Task"
              className="bg-gray-200 py-2 px-3 rounded-xl mt-2 border border-yellow-500 w-full"
              value={title}
            />
            <textarea
              className="rounded-2xl pl-3"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
        )}

        {!displayTitle && (
          <div className="flex gap-3">
            <button onClick={handleCheckClick}>
              <Check className="text-green-600" />
            </button>
            <button onClick={handleXClick}>
              <X className="text-red-600" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
