import { createContext, useContext, useEffect, useState } from "react";
import firebase from "./client";
import { getUserProfile } from "./getUserProfile";

type user = {
  uid: string;
  name: string;
  email: string | null;
  subscriptionDate: object;
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
    let unsubscribe: any;
    let userUnsubscribe: any;
    // Listen authenticated user
    unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          // User is signed in.
          const { uid, email } = user;

          userUnsubscribe = getUserProfile(uid, (r) => {
            const { name, subscriptionDate } = r.data();
            setUser((prev: any) => ({
              ...prev,
              uid,
              email,
              name,
              subscriptionDate,
            }));
            setLoadingUser(false);
          });
        } else {
          setUser(null);
          setLoadingUser(false);
        }
      } catch (error) {
        console.log(error);
      }
    });

    // Unsubscribe listeners on unmount
    return () => {
      if (unsubscribe) unsubscribe();
      if (userUnsubscribe) userUnsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorhands the context!
export const useUser = () => useContext(UserContext);
