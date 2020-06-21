import firebase from "firebase/app";

export const getUserProfile = (uid: string, callback: (r: any) => void) => {
  return firebase.firestore().collection("users").doc(uid).onSnapshot(callback);
};
