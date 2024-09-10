import React, { useState } from "react";
import { CirclePlus, Check, X, MoveRight, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { updateTasks, addTask, deleteTask, checkTaskOff } from "../redux/user/userSlice";

export default function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editMode, setEditMode] = useState(null); // Stores the title of the task being edited

  const tasks = useSelector((state) => state.user.tasks || {});
  const dispatch = useDispatch();

  // Sort task titles by id to maintain order
  const taskTitles = Object.keys(tasks).sort(
    (a, b) => tasks[a].id - tasks[b].id
  );

  function handleCheckClick() {
    if (description.trim() === "" || title.trim() === "") return; // Ensure both title and description are provided for new tasks

    if (editMode === "new") {
      dispatch(addTask({ title, description }));
    } else {
      dispatch(updateTasks({ title, description, previousTitle: editMode }));
    }

    setTitle("");
    setDescription("");
    setEditMode(null);
  }

  function handleXClick() {
    setTitle("");
    setDescription("");
    setEditMode(null);
  }

  function handleTaskClick(title) {
    setEditMode(title);
    setTitle(title);
    setDescription(tasks[title].description);
  }

  function handleDeleteClick(title) {
    dispatch(deleteTask({ title }));
    if (editMode === title) {
      setTitle("");
      setDescription("");
      setEditMode(null);
    }
  }

  function checkOff(title) {
    dispatch(checkTaskOff({ title }));
    if (editMode === title) {
      setTitle("");
      setDescription("");
      setEditMode(null);
    }
  }

  return (
    <>
      <div className="font-bold text-3xl border-b-4 border-yellow-500 md:text-xl">
        Todo
      </div>

      <ul className="flex flex-col gap-3">
        {taskTitles.map((taskTitle, index) => (
          <li
            className="bg-gray-100 py-2 px-3 rounded-xl mt-2 break-words flex flex-col border border-yellow-500 cursor-pointer"
            key={index}
          >
            <div
              className="flex justify-between items-center"
              onClick={() => handleTaskClick(taskTitle)}
            >
              {editMode === taskTitle ? (
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Task"
                  className="bg-gray-200 py-2 px-3 rounded-xl border border-yellow-500 w-full"
                  value={title}
                  style={{ height: "35px" }} 
                />
              ) : (
                <>
                <span>{taskTitle}</span>
                <button onClick={() => checkOff(taskTitle)}>
                  <MoveRight />
                </button>
                </>
              )}
            </div>

            {editMode === taskTitle && (
              <div className="flex flex-col gap-3 rounded-lg mt-3">
                <textarea
                  className="rounded-2xl pl-3 bg-gray-200 py-2 px-3"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  style={{ height: "60px" }} // Fixed height for the textarea to maintain layout
                />
                <div className="flex gap-3 mt-2 justify-between">
                  <div>
                    <button onClick={handleCheckClick}>
                      <Check className="text-green-600" />
                    </button>
                    <button onClick={handleXClick}>
                      <X className="text-red-600" />
                    </button>
                  </div>

                  <div>
                    <button onClick={() => handleDeleteClick(taskTitle)}>
                      <Trash2 className="text-red-600 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Always show Add Task button when not in edit mode */}
      {editMode !== "new" && (
        <button
          className="bg-gray-200 py-2 px-3 rounded-xl mt-2 flex gap-2"
          onClick={() => {
            setEditMode("new");
            setTitle("");
            setDescription("");
          }}
        >
          <CirclePlus />
          Add Task
        </button>
      )}

      {editMode === "new" && (
        <div className="flex flex-col gap-3 bg-gray-300 px-3 rounded-lg mt-3 py-3">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter Task"
            className="bg-gray-200 py-2 px-3 rounded-xl border border-yellow-500 w-full"
            value={title}
            style={{ height: "35px" }} // Fixed height for the input to avoid layout shift
          />
          <textarea
            className="rounded-2xl pl-3 bg-gray-200 py-2 px-3"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
            value={description}
            style={{ height: "60px" }} // Fixed height for the textarea to maintain layout
          />
          <div className="flex gap-3 mt-2 justify-between">
            <div>
              <button onClick={handleCheckClick}>
                <Check className="text-green-600" />
              </button>
              <button onClick={handleXClick}>
                <X className="text-red-600" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
