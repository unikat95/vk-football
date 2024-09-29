import React, { SetStateAction, useEffect, useRef, useState } from "react";

import NavbarItems from "../NavbarItems/NavbarItems";
import Logo from "../Logo/Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useLocation } from "react-router-dom";

type NavbarProps = {
  setNavbarHeight: React.Dispatch<SetStateAction<number>>;
  disabledPatch: string[];
};

export default function Navbar({
  setNavbarHeight,
  disabledPatch,
}: NavbarProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const isDisabled = disabledPatch.some((path) =>
      location.pathname.startsWith(path)
    );

    if (isDisabled) {
      setNavbarHeight(0);
    } else if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (navRef.current) {
        setNavbarHeight(navRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname, setNavbarHeight, disabledPatch]);

  if (disabledPatch.some((path) => location.pathname.startsWith(path)))
    return null;

  return (
    <nav
      ref={navRef}
      className="w-full bg-white flex justify-center items-center fixed top-0 left-0 px-5 py-5 2xl:px-0 overflow-hidden"
    >
      <div className="w-full max-w-[1400px] flex justify-between items-center">
        <Logo />
        <NavbarItems openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </nav>
  );
}
