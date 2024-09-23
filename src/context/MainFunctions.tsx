import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export async function handleAddTeam(
  id: string,
  teamName: string,
  teamStadium: string,
  teamLogo: string
) {
  const teamData = {
    id: id,
    name: teamName,
    stadium: teamStadium,
    logo: teamLogo,
    points: 0,
    winnings: 0,
    draws: 0,
    lost: 0,
    goalsScored: 0,
    goalsConceded: 0,
    hostMatches: 0,
    hostWinnings: 0,
    hostDraws: 0,
    hostLost: 0,
    hostGoalsScored: 0,
    hostGoalsConceded: 0,
    awayMatches: 0,
    awayWinnings: 0,
    awayDraws: 0,
    awayLost: 0,
    awayGoalsScored: 0,
    awayGoalsConceded: 0,
    directMatches: 0,
    directWinnings: 0,
    directDraws: 0,
    directLost: 0,
    directGoalsScored: 0,
    directGoalsConceded: 0,
  };

  await setDoc(doc(db, "teams", teamData.id), teamData);
}
