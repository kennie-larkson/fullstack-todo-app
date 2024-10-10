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
  console.log("Checkbox clicked", clickedCheckbox);

  return (
    <>
      <div className="flex w-full space-x-2 md:space-x-4 text-black">
        <div className={`flex`}>
          <input
            type="checkbox"
            name="todo-item"
            id="todo-item"
            onClick={() => {
              console.log("Checkbox clicked");
              setClickedCheckbox((prev) => !prev);
              console.log(clickedCheckbox);
            }}
          />
        </div>
        <div
          className={`flex text-sm md:text-xl font-normal md:font-medium font-sans in" ${
            clickedTrash ? "line-through text-red-600" : ""
          } ${clickedCheckbox ? "p-4" : ""}`}
        >
          {prop.todo.item}
        </div>
        {clickedTrash ? (
          <div className={`flex ${clickedCheckbox ? "p-4" : ""}`}>
            <CheckIcon width={20} height={20} color="green" />
          </div>
        ) : (
          ""
        )}
        <div className={`flex ${clickedCheckbox ? "p-4" : ""}`}>
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
            className={`${
              clickedTrash ? "cursor-not-allowed opacity-50" : ""
            } `}
          />
        </div>
      </div>
    </>
  );
}
