import React from "react";

export default function ScoreboardTableHead() {
  return (
    <div className="w-full grid grid-cols-[auto,2fr,repeat(6,1fr)] md:grid-cols-[auto,2fr,repeat(7,1fr)] justify-center items-center bg-primaryDark text-white text-xs md:text-sm font-semibold md:font-normal px-2 py-2 md:px-3 md:py-3">
      <div></div>
      <div className="flex justify-center items-center col-span-2">
        Drużyna:
      </div>
      <div className="flex justify-center items-center pl-2">PKT:</div>
      <div className="flex justify-center items-center pl-2">M:</div>
      <div className="flex justify-center items-center pl-2">W:</div>
      <div className="flex justify-center items-center pl-2">R:</div>
      <div className="flex justify-center items-center pl-2">P:</div>
      <div className="justify-center items-center hidden md:flex">Bramki:</div>
    </div>
  );
}
