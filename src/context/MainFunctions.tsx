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
  };

  await setDoc(doc(db, "teams", teamData.id), teamData);
}
