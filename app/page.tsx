import TodoItemList from "./todoItemList";
import SearchInput from "./searchInput";
import SearchButton from "./searchButton";
import {
  FolderIcon,
  DocumentIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex px-6  md:px-10 min-h-screen">
      <div className="flex flex-col w-full bg-white text-black  font-sans rounded-b-lg md:rounded-none ">
        <div className="flex flex-col py-8 md:mt-6 bg-blue-500">
          <div className="flex items-center ">
            <div className="flex">
              <p className="text-pretty text-2xl md:text-8xl text-purple-600">
                Welcome to Secretary
              </p>
            </div>
            <div className="flex text-white">
              <PencilIcon width={30} height={30} />
            </div>
          </div>
          <div className="flex mt-2 pl-4 md:mt-4 md:ml-4 md:pl-10 ">
            <p className="text-sm md:text-lg text-slate-200">
              Onboard your own personal digital assistant. Declutter your head
              for the fun things and intuitive tasks while your secretary
              handles the mundane and repetitive.{" "}
            </p>
          </div>
        </div>

        {/* <div className="flex items-end justify-center space-x-0 md:space-x-1 my-2 md:my-12 px-1">
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
        <TodoItemList /> */}
      </div>
    </div>
  );
}
