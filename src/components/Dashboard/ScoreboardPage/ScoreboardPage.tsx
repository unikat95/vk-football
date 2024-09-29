import React from "react";
import Scoreboard from "../Scoreboard/Scoreboard";

export default function ScoreboardPage() {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5">
      <Scoreboard editable={true} />
    </div>
  );
}
