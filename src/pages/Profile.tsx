import React, { useContext } from "react";

import { MainContext } from "../context/MainContext";

import { IoIosLogOut } from "react-icons/io";
import { RiDashboardHorizontalFill } from "react-icons/ri";

import CtaButton from "../components/CtaButton/CtaButton";
import CtaLink from "../components/CtaLink/CtaLink";

export default function Profile() {
  const context = useContext(MainContext);
  if (!context) return "loading...";

  const {
    currentUser,
    setCurrentUser,
    setUser,
    handleLogout,
    setInitializing,
  } = context;

  return (
    <>
      {currentUser ? (
        <div className="flex bg-white flex-col justify-center items-center gap-5 p-5 rounded-md">
          <div className="flex gap-2">
            <CtaButton
              text="Logout"
              Icon={IoIosLogOut}
              onClick={() =>
                handleLogout(setUser, setCurrentUser, setInitializing)
              }
            />
            {currentUser.isAdmin && (
              <CtaLink
                text="Dashboard"
                to="/dashboard"
                Icon={RiDashboardHorizontalFill}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex bg-zinc-200 flex-col justify-center items-center gap-5 p-5 rounded-md">
          loading...
        </div>
      )}
    </>
  );
}
