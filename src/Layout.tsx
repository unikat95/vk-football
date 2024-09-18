import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Account from "./components/Account/Account";

export default function Layout() {
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  return (
    <div className="w-full max-w-[1400px] h-auto flex flex-col gap-5 px-5 py-5 2xl:px-0">
      <Navbar setNavbarHeight={setNavbarHeight} />
      <div
        className="w-full h-full flex flex-col justify-start items-start p-0"
        style={{ paddingTop: `${navbarHeight}px` }}
      >
        <Outlet />
      </div>
      <Account />
    </div>
  );
}
