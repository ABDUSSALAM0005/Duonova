"use client";

import path from "path";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Work from "../pages/Work";
import Resume from "../pages/Resume";

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/Services",
  },
  {
    name: "resume",
    path: "/Resume",
  },
  {
    name: "work",
    path: "/Work",
  },
  {
    name: "contact",
    path: "/Contact",
  },
];

const Nav = () => {
  const pathname = useLocation();
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {Links.map((Link, index) => {
        return (
          <NavLink
            // className={`${Link.path === pathname ? "text-accent border-b-2 border-accent" : "disabled"}`}

            className={({ isActive }) =>
              `capitalize relative transition-all duration-300 ease-in-out hover:text-accent hover:scale-105 ${
                isActive ? "text-accent" : "text-white"
              } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300`
            }
            to={Link.path}
            key={index}
          >
            {Link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Nav;
