import React from "react";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to="/" className="font-bold z-10">
      Victoria <span className="text-red-500">Kidałowice</span>
    </NavLink>
  );
}
