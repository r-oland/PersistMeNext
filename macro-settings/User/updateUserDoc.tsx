import firebase from "firebase/app";

export const updateUserDoc = async (data: {
  name: string;
  email: string;
  uid: string;
}) => {
  const { name, email, uid } = data;

  try {
    if (uid === firebase.auth().currentUser?.uid) {
      const snapshot = await firebase
        .firestore()
        .collection("users")
        .where("userId", "==", uid)
        .get();

      snapshot.forEach((doc) => {
        doc.ref.update({ name, email });
      });

      const user = firebase.auth();
      const currentEmail = user.currentUser?.email;

      if (email !== currentEmail) {
        user.currentUser?.updateEmail(email);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
