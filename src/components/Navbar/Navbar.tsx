import React, { SetStateAction, useEffect, useRef, useState } from "react";

import NavbarItems from "../NavbarItems/NavbarItems";
import Logo from "../Logo/Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

type NavbarProps = {
  setNavbarHeight: React.Dispatch<SetStateAction<number>>;
};

export default function Navbar({ setNavbarHeight }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (navRef.current) {
        setNavbarHeight(navRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full bg-white flex justify-center items-center fixed top-0 left-0 px-5 py-5 2xl:px-0"
    >
      <div className="w-full max-w-[1400px] flex justify-between items-center">
        <Logo />
        <NavbarItems openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </nav>
  );
}
