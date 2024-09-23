import React from "react";
import Scoreboard from "../components/Dashboard/Scoreboard/Scoreboard";

export default function Table() {
  return (
    <div className="w-full">
      <Scoreboard editable={false} />
    </div>
  );
}
