"use client";

export default function SearchButton() {
  return (
    <>
      <div
        className="flex"
        onClick={() => {
          console.log("search button click");
        }}
      >
        <input
          type="button"
          value="Search"
          className="rounded-full bg-blue-500 px-2 text-white cursor-pointer text-sm"
        />
      </div>
    </>
  );
}
