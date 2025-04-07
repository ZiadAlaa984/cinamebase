"use client";
import { useState, useEffect } from "react";
import ButtonsNavbar from "./ButtonsNavbar";
import { DATA } from "@/constant";
import { Search } from "./nav-menu";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavbar() {
  const [isActive, setIsActive] = useState(false);
  const [kind, setKind] = useState("movie");

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isActive]);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="cursor-pointer z-50 lg:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="w-[35px] h-[24px] flex flex-col justify-between">
          <span
            className={`block h-[3px] rounded-full bg-primary transition-transform duration-300 ${
              isActive ? "transform translate-y-[10px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] rounded-full bg-primary transition-opacity duration-300 ${
              isActive ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] rounded-full bg-primary transition-transform duration-300 ${
              isActive ? "transform -translate-y-[10px] -rotate-45" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile Navigation Menu with Animation */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0  h-[93vh] w-full z-40 lg:hidden flex flex-col border rounded-3xl bg-background  overflow-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="p-4  pt-18 flex flex-col h-full"
            >
              <ButtonsNavbar
                toggleMenu={toggleMenu}
                className="flex  justify-between items-start"
              />

              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex w-full border-b overflow-x-auto mt-4 scrollbar-hide"
              >
                {DATA.search.map((search, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                    onClick={() => {
                      setKind(search.value);
                    }}
                    className={`${
                      kind === search.value ? "border-b-2 border-primary" : ""
                    } flex gap-2 text-base cursor-pointer items-center
                    justify-center p-4 whitespace-nowrap text-black dark:text-white rounded-t-lg`}
                  >
                    {search.icon}
                    <span className="text-sm md:text-base">{search.label}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-6 flex-grow"
              >
                <Search
                  className="max-h-[300px]"
                  kind={kind}
                  setModel={setIsActive}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
