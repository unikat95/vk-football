import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Account from "./components/Account/Account";
import { MainContext } from "./context/MainContext";
import PageLoading from "./components/PageLoading/PageLoading";

export default function Layout() {
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  const context = useContext(MainContext);
  if (!context) return <PageLoading />;

  const { isModalOpen, setIsModalOpen } = context;

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-[1400px] h-auto flex flex-col gap-5 px-5 py-5 2xl:px-0">
      <Navbar setNavbarHeight={setNavbarHeight} />
      <div
        className="w-full h-full flex flex-col justify-start items-start p-0"
        style={{ paddingTop: `${navbarHeight}px` }}
      >
        <Outlet />
        <Account isOpen={isModalOpen} onClose={handleClose} />
      </div>
    </div>
  );
}
