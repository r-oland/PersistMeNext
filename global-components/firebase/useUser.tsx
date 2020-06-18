import { createContext, useContext, useEffect, useState } from "react";
import firebase from "./client";

type user = {
  uid: string;
  username: string;
};

type contextProps = {
  user: user | null;
  setUser: any;
  loadingUser: boolean;
};

type props = {
  children: React.ReactNode;
};

export const UserContext = createContext<Partial<contextProps>>({});

export default function UserContextComp({ children }: props) {
  const [user, setUser] = useState<user | null>(null);
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.

  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          // User is signed in.
          const { uid } = user;

          await firebase
            .firestore()
            .collection(`users`)
            .where("userId", "==", uid)
            .get()
            .then((r) =>
              r.forEach((data) => {
                const { username } = data.data();
                setUser({ uid, username });
              })
            );
        } else setUser(null);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingUser(false);
      }
    });

    // Unsubscribe auth listener on unmount
    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorhands the context!
export const useUser = () => useContext(UserContext);
