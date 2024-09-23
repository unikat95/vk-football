import React from "react";

export default function ScoreboardTableHead() {
  return (
    <div className="w-full grid grid-cols-[auto,2fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] bg-zinc-600 text-white text-sm p-1 gap-1 mb-1">
      <div className="w-6 pl-2 text-center">Poz:</div>
      <div className="px-2 text-center col-span-2">Drużyna:</div>
      <div className="px-2 text-center">PKT:</div>
      <div className="px-2 text-center">M:</div>
      <div className="px-2 text-center">W:</div>
      <div className="px-2 text-center">R:</div>
      <div className="px-2 text-center">P:</div>
      <div className="px-2 text-center">Bramki:</div>
    </div>
  );
}
