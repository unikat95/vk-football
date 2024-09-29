import React, { SetStateAction, useState } from "react";

import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import DashboardNavbarItem from "../DashboardNavbarItem/DashboardNavbarItem";
import DashboardLogo from "../DashboardLogo/DashboardLogo";
import { navItems } from "./NavItems";

import { GiHamburgerMenu } from "react-icons/gi";

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`
        h-full bg-primaryDark p-5 transition-all
        ${
          isOpen
            ? "absolute sm:relative w-[90%] sm:w-[50%] md:w-[40%] lg:w-[25%] xl:w-[20%]"
            : "relative w-[5rem]"
        }
        `}
    >
      <ul className="w-full h-full flex flex-col text-nowrap justify-between items-center text-white">
        <div className="w-full h-full flex flex-col justify-center items-center gap-10 relative">
          <DashboardLogo isOpen={isOpen} />
          <button
            className="absolute top-0 -right-8 p-2 bg-secondaryDark hover:bg-thirdDark rounded-md"
            onClick={handleToggleMenu}
          >
            <GiHamburgerMenu />
          </button>
          <div className="w-full h-full flex flex-col justify-start items-start gap-2">
            {navItems.map((item) => (
              <DashboardNavbarItem
                item={item}
                Icon={item.icon}
                isOpen={isOpen}
              />
            ))}
          </div>
        </div>
        <div>
          <NavLink to="/">
            <div className="bg-secondaryDark hover:bg-thirdDark p-3 rounded-xl">
              <FaHome />
            </div>
          </NavLink>
        </div>
      </ul>
    </div>
  );
}
