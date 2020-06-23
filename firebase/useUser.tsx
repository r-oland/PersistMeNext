import { createContext, useContext, useEffect, useState } from "react";
import firebase from "./client";
import { getUserProfile } from "./getUserProfile";

type user = {
  uid: string;
  name: string;
  email: string | null;
  subscriptionDate: object;
  activities: [];
  completeActivities: [];
  dayTypes: [];
};

type contextProps = {
  user: user | null;
  data: any;
  setUser: any;
  setData: any;
  loadingUser: boolean;
  signedIn: boolean;
};

type props = {
  children: React.ReactNode;
};

export const UserContext = createContext<Partial<contextProps>>({});

export default function UserContextComp({ children }: props) {
  const [user, setUser] = useState<user | null>(null);
  const [signedIn, setSignedIn] = useState(false);
  const [data, setData] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.

  useEffect(() => {
    let authUnsubscribe: any;
    let userUnsubscribe: any;
    // Listen authenticated user
    authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          // User is signed in.
          setSignedIn(true);
          const { uid, email } = user;

          userUnsubscribe = getUserProfile(uid, (r) => {
            const { name, subscriptionDate, activities, dayTypes } = r.data();

            setUser((prev: any) => ({
              ...prev,
              uid,
              email,
              name,
              subscriptionDate,
              dayTypes: Object.entries(dayTypes)
                .sort()
                .map((r) => {
                  return r[1];
                }),
              activities: Object.entries(activities)
                .sort()
                .map((r) => {
                  return r[1];
                }),
              completeActivities: activities,
            }));

            setLoadingUser(false);
          });
        } else {
          setSignedIn(false);
          setUser(null);
          setLoadingUser(false);
        }
      } catch (error) {
        setLoadingUser(false);
        console.log(error);
      }
    });

    // Unsubscribe listeners on unmount
    return () => {
      if (authUnsubscribe) authUnsubscribe();
      if (userUnsubscribe) userUnsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ user, data, setData, setUser, loadingUser, signedIn }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext);
