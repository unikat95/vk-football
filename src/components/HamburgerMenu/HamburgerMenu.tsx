import React, { SetStateAction } from "react";

type HamburgerMenuProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
};

export default function HamburgerMenu({
  openMenu,
  setOpenMenu,
}: HamburgerMenuProps) {
  return (
    <button
      className={`hamburger-menu md:hidden  ${openMenu && "active"}`}
      onClick={() => setOpenMenu(!openMenu)}
    ></button>
  );
}
