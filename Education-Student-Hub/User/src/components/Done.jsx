import React from "react";
import { CirclePlus, Check, Trash2, X, MoveRight } from "lucide-react";

export default function Done({ doneTasks }) {
  return (
    <>
      <div className="font-bold text-3xl border-b-4 border-green-500 md:text-xl">
        Done
      </div>
      <ul className="mt-4">
        {doneTasks.map((doneTask, index) => (
          <li
            key={index}
            className="bg-gray-100 py-2 px-3 rounded-xl mt-2 break-words flex justify-between border border-green-500"
            style={{ wordBreak: "break-word" }}
          >
            {doneTask}

          </li>
        ))}
      </ul>
    </>
  );
}
