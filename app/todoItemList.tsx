import TodoItem from "./todoItem";

export type TodoType = {
  item: string;
  status: boolean;
  createdAt: Date;
};

const todoItems: TodoType[] = [
  {
    item: "Go to the store",
    status: false,
    createdAt: new Date(),
  },
  {
    item: "Feed and walk the dog",
    status: false,
    createdAt: new Date(),
  },
  {
    item: "Refil the milk jar and refrigerate",
    status: false,
    createdAt: new Date(),
  },
  {
    item: "Do the laundry",
    status: false,
    createdAt: new Date(),
  },
];

export default function TodoItemList() {
  return (
    <div className="flex flex-col w-full p-2 md:p-4 space-y-3 md:space-y-6">
      {todoItems.map((todo) => (
        <TodoItem key={todo.item} todo={todo} />
      ))}
    </div>
  );
}
