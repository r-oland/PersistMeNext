import firebase from "firebase/app";

export const deleteActivity = (
  activityNumber: string,
  uid: string | undefined
) => {
  firebase
    .firestore()
    .collection("users")
    .doc(uid)
    .update({
      [`activities.${activityNumber}`]: firebase.firestore.FieldValue.delete(),
    });
};
