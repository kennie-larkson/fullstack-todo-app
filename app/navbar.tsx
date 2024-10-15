"use client";

import React from "react";
import Link from "next/link";

type NavLinkType = {
  linkText: string;
  linkRoute: string;
};

const navLinks: NavLinkType[] = [
  {
    linkText: "Home",
    linkRoute: "/",
  },
  {
    linkText: "About",
    linkRoute: "/about",
  },
  {
    linkText: "Subscribe",
    linkRoute: "auth/register",
  },
];

export default function Navbar() {
  const [isLoggedin, setIsLoggedIn] = React.useState<boolean>(false);

  return (
    <div className="flex items-center justify-evenly md:justify-around space-x-8  py-3 md:px-12 bg-blue-500 border-0 sticky top-0 z-50 ">
      <div className="flex">
        <ul className="flex items-center justify-start md:justify-around space-x-2 md:space-x-8">
          {navLinks.map((link) => {
            return (
              <li
                key={link.linkText}
                className="flex cursor-pointer  md:text-xl  md:hover:font-semibold"
              >
                <Link href={link.linkRoute}>{link.linkText}</Link>
              </li>
            );
          })}
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
        <Link href="/account">Sign In</Link>
      </div>
      <div
        className={` ${
          isLoggedin ? "flex" : "hidden"
        } cursor-pointer md:hover:font-semibold`}
        onClick={() => {
          setIsLoggedIn((prev) => !prev);
        }}
      >
        <Link href="/">Sign Out</Link>
      </div>
    </div>
  );
}
