import Image from "next/image";
import TodoItemList from "./todoItemList";

export default function Home() {
  return (
    <div className="flex py-4 px-6 md:px-40">
      <div className="flex flex-col w-full justify-center bg-zinc-200 text-black text-sm md:text-xl font-normal md:font-semibold font-sans min-h-screen">
        <TodoItemList />
      </div>
    </div>
  );
}
