"use client";

import React from "react";

export default function Navbar() {
  const [isLoggedin, setIsLoggedIn] = React.useState<boolean>(false);

  return (
    <div className="flex items-center justify-center md:justify-around space-x-4  py-3 md:px-12 bg-blue-500 border-0 sticky top-0 z-50 ">
      <div className="flex">
        <ul className="flex items-center justify-start md:justify-around space-x-2 md:space-x-8">
          <li className="flex cursor-pointer  md:hover:font-semibold">Home</li>
          <li className="flex cursor-pointer  md:hover:font-semibold">About</li>
          <li className="flex cursor-pointer  md:hover:font-semibold">
            Subscription
          </li>
        </ul>
      </div>
      <div
        className={` ${
          isLoggedin ? "hidden" : "flex"
        } cursor-pointer md:hover:font-semibold`}
        onClick={() => {
          setIsLoggedIn((prev) => !prev);
        }}
      >
        <p>Signup</p>
      </div>
      <div
        className={` ${
          isLoggedin ? "flex" : "hidden"
        } cursor-pointer md:hover:font-semibold`}
        onClick={() => {
          setIsLoggedIn((prev) => !prev);
        }}
      >
        <p>Sign Out</p>
      </div>
    </div>
  );
}
