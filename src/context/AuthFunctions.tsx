import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { SetStateAction } from "react";
import { doc, setDoc } from "firebase/firestore";
import { UserProps } from "./ContextTypes";
import { NavigateFunction } from "react-router-dom";

export async function handleLogin(
  email: string,
  password: string,
  setLoading: React.Dispatch<SetStateAction<boolean>>,
  setInitializing: React.Dispatch<SetStateAction<boolean>>,
  setOpenModal: React.Dispatch<SetStateAction<boolean>>,
  currentUser: UserProps | null,
  navigate: NavigateFunction
) {
  setLoading(true);
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      setLoading(false);
      setInitializing(true);
      setOpenModal(false);
      if (!currentUser?.isCompleted) {
        navigate("profile");
      }
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
}

export async function handleSignUp(
  email: string,
  password: string,
  setLoading: React.Dispatch<SetStateAction<boolean>>,
  setInitializing: React.Dispatch<SetStateAction<boolean>>,
  setOpenModal: React.Dispatch<SetStateAction<boolean>>,
  currentUser: UserProps | null,
  navigate: NavigateFunction
) {
  setLoading(true);
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      const userId = userCred.user.uid;
      const userData = {
        id: userId,
        email: email,
        firstName: "",
        lastName: "",
        age: 0,
        isAdmin: false,
        isCompleted: false,
      };

      setDoc(doc(db, "users", userId), userData);

      setLoading(false);
      setInitializing(true);
      setOpenModal(false);
      if (!currentUser?.isCompleted) {
        navigate("profile");
      }
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
}

export async function handleLogout(
  setUser: React.Dispatch<SetStateAction<User | null>>,
  setCurrentUser: React.Dispatch<SetStateAction<UserProps | null>>,
  setInitializing: React.Dispatch<SetStateAction<boolean>>
) {
  await signOut(auth);
  setInitializing(true);
  setUser(null);
  setCurrentUser(null);
}
