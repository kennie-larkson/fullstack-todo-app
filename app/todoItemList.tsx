import TodoItem from "./todoItem";
import { fetchTodos } from "./lib/data";
import { Todo } from "./lib/definitions";

export type TodoType = {
  id: string;
  item: string;
  status: boolean;
  createdAt: Date;
};

export type OmitIdFromTodo = Omit<Todo, "id">;

/* export const todoItems: TodoType[] = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    item: "Go to the store",
    status: false,
    createdAt: new Date(),
  },
  {
    id: "410544b2-4001-4271-6754-fec4b6a6442a",
    item: "Feed and walk the dog",
    status: false,
    createdAt: new Date(),
  },
  {
    id: "410544b2-4001-6754-9855-fec4b6a6442a",
    item: "Refil the milk jar and refrigerate",
    status: false,
    createdAt: new Date(),
  },
  {
    id: "410544b2-6754-4271-9855-fec4b6a6442a",
    item: "Do the laundry",
    status: false,
    createdAt: new Date(),
  },
]; */

export default async function TodoItemList() {
  const todos = await fetchTodos();

  return (
    <div className="flex flex-col w-full px-2 pt-3 md:p-12 space-y-3 md:space-y-6 bg-blue-500">
      {todos.map((todo) => (
        <div className="flex flex-col space-y-1" key={todo.id}>
          <TodoItem todo={todo} />
          <hr className="size-4 w-full" />
        </div>
      ))}
    </div>
  );
}
