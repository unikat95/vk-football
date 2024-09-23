import React, { SetStateAction } from "react";
import { NavLink, useLocation } from "react-router-dom";

type NavbarItemProps = {
  to: string;
  name: string;
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
};

export default function NavbarItem({ to, name, setOpenMenu }: NavbarItemProps) {
  const location = useLocation();

  return (
    <li>
      <NavLink
        to={to}
        onClick={() => setOpenMenu(false)}
        className={`flex justify-center items-center text-2xl font-medium md:text-sm md:font-normal relative hover:text-red-500 ${
          location.pathname === to && "text-red-500"
        }`}
      >
        {name}
      </NavLink>
    </li>
  );
}
