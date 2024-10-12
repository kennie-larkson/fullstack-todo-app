import TodoItem from "./todoItem";
import { fetchTodos } from "./lib/data";

export type TodoType = {
  id: string;
  item: string;
  status: boolean;
  createdAt: Date;
};

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
    <div className="flex flex-col w-full p-2 md:p-4 space-y-3 md:space-y-6">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
