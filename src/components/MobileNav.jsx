"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Work from "../pages/Work";
import Resume from "../pages/Resume";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

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



  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-4xl text-accent cursor-pointer" />
      </SheetTrigger>

      <SheetContent>
        <motion.div>
          {/*Logo*/}
          <SheetTitle className="mt-32 mb-40 text-center text-2xl">
            <NavLink to="/">
              <h1 data-aos="fade-left" className="font-semibold text-white">
                Duonova<span className="text-accent">.</span>
              </h1>
            </NavLink>
          </SheetTitle>

          <SheetHeader>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="flex flex-col justify-center items-center gap-8"
            >
              {Links.map((link, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `capitalize relative transition-all duration-300 ease-in-out hover:text-accent hover:scale-105 ${
                        isActive ? "text-accent" : "text-white"
                      } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-accent after:transition-all after:duration-300`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </SheetHeader>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
