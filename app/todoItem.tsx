"use client";

import { TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

export type TodoType = {
  item: string;
  status: boolean;
  createdAt: Date;
};

export default function TodoItem(prop: { todo: TodoType }) {
  const [clickedTrash, setClickedTrash] = React.useState(false);
  const [clickedCheckbox, setClickedCheckbox] = React.useState<boolean>(false);

  return (
    <>
      <div className="flex w-full justify-between md:space-x-4 text-black">
        <div className={`flex px-2`}>
          <input
            type="checkbox"
            name="todo-item"
            id="todo-item"
            onClick={() => {
              console.log("Checkbox clicked");
              setClickedCheckbox((prev) => !prev);
            }}
          />
        </div>
        <div
          className={`flex items-center text-sm text-white w-full md:text-xl font-normal md:font-medium font-sans" ${
            clickedTrash ? "line-through text-red-600" : ""
          } ${clickedCheckbox ? "p-4" : ""}`}
        >
          {prop.todo.item}
        </div>
        <div className="flex items-center bg-white space-x-3 p-2 rounded-md">
          {clickedTrash ? (
            <div className={`flex  `}>
              <CheckIcon width={20} height={20} color="green" />
            </div>
          ) : (
            ""
          )}
          <div className={`flex cursor-pointer `}>
            <TrashIcon
              width={20}
              height={20}
              color="red"
              onClick={() => {
                if (!clickedTrash) {
                  console.log("Trash can");
                  setClickedTrash(true);
                }
              }}
              className={` ${
                clickedTrash ? "cursor-not-allowed opacity-50" : ""
              } `}
            />
          </div>
        </div>
      </div>
    </>
  );
}
