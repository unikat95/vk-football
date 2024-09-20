import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { TeamProps } from "../context/ContextTypes";

export const useTeams = () => {
  const [teams, setTeams] = useState<TeamProps[]>([]);

  useEffect(() => {
    const teamUnsubscribe = onSnapshot(collection(db, "teams"), (teamsData) => {
      const teamsArray = teamsData.docs.map(
        (team) =>
          ({
            id: team.id,
            ...team.data(),
          } as TeamProps)
      );
      setTeams(teamsArray);
    });

    return () => teamUnsubscribe();
  }, []);

  return { teams, setTeams };
};
