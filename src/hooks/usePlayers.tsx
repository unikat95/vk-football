import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { PlayerProps } from "../context/ContextTypes";

export const usePlayers = () => {
  const [players, setPlayers] = useState<PlayerProps[]>([]);

  useEffect(() => {
    const playersUnsubscribe = onSnapshot(
      collection(db, "players"),
      (playersData) => {
        const playersArray = playersData.docs.map(
          (player) =>
            ({
              id: player.id,
              ...player.data(),
            } as PlayerProps)
        );

        setPlayers(playersArray);
      }
    );

    return () => playersUnsubscribe();
  }, []);

  console.log(players);

  return { players, setPlayers };
};
