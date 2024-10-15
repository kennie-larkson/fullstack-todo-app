import TodoItemList from "../todoItemList";
import SearchInput from "../searchInput";
import SearchButton from "../searchButton";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex px-6  md:px-40 min-h-screen">
      <div className="flex flex-col w-full justify-center space-y-6 bg-white text-black text-sm md:text-xl font-normal md:font-semibold font-sans rounded-b-lg md:rounded-none ">
        <div className="flex items-end justify-center space-x-0 md:space-x-1 my-2 md:my-12 px-1">
          <div className="flex w-full md:w-3/5">
            <p className="w-full text-center text-2xl md:text-2xl font-bold font-serif">
              Never miss out on any of your important activities!
            </p>
          </div>
          <div className="hidden md:flex text-yellow-600">
            <FaceSmileIcon width={30} height={30} color="" />
          </div>
        </div>
        <div className="flex  justify-center space-x-1 px-3">
          <SearchInput />
          <SearchButton />
        </div>
        <TodoItemList />
      </div>
    </div>
  );
}
