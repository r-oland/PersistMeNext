import firebase from "firebase/app";

export const getUserProfile = (uid: string, callback: (r: any) => void) => {
  return firebase
    .firestore()
    .collection("users")
    .where("userId", "==", uid)
    .onSnapshot((r) => r.forEach(callback));
};
