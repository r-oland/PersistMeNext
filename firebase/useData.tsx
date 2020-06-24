// Components==============
import { useEffect, useState } from "react";
import { dataTemplate } from "../macro-tracker/dataTemplate";
import { getYear, weekNumber } from "../micro-components/dateFormating";
import firebase from "./client";
import { useUser } from "./useUser";
// =========================

export function useData() {
  const { setData, user } = useUser();
  const uid = user?.uid;
  const [week, setWeek] = useState(weekNumber());
  const [year, setYear] = useState(getYear());

  useEffect(() => {
    let dataUnsubscribe: any;

    if (user) {
      const dataDoc = firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .collection("data")
        .doc(`${year}_${week}`);

      dataDoc.get().then((snapshot) => {
        if (!snapshot.exists) {
          dataDoc.set(dataTemplate(week));
        }
      });

      dataUnsubscribe = dataDoc.onSnapshot((r) => {
        setData(r.data());
      });
    }
    return () => {
      if (dataUnsubscribe) dataUnsubscribe();
    };
  }, [uid, week]);

  return { week, setWeek, year, setYear };
}
