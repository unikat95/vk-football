import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { UserProps } from "../context/ContextTypes";
import { auth, db } from "../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const userUnsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        const currUserUnsubscribe = onSnapshot(
          doc(db, "users", user.uid),
          (userData) => {
            setCurrentUser(
              userData.data() ? (userData.data() as UserProps) : null
            );
            setInitializing(false);
          }
        );

        return () => currUserUnsubscribe();
      } else {
        setLoading(false);
        setInitializing(false);
      }
    });

    return () => userUnsubscribe();
  }, [user]);

  return {
    user,
    setUser,
    currentUser,
    setCurrentUser,
    loading,
    initializing,
    setInitializing,
  };
};
