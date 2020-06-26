import firebase from "firebase/app";

export const updateUserDoc = async (
  data: {
    name: string;
    email: string;
    uid: string;
  },
  setError: any,
  currentName: string | undefined
) => {
  const { name, email, uid } = data;
  const user = firebase.auth();
  const currentEmail = user.currentUser?.email;

  try {
    if (uid === user.currentUser?.uid) {
      const snapshot = await firebase
        .firestore()
        .collection("users")
        .where("userId", "==", uid)
        .get();

      if (name !== currentName) {
        snapshot.forEach((doc) => doc.ref.update({ name }));
      }

      if (email !== currentEmail) {
        user.currentUser
          ?.updateEmail(email)
          .then(() => snapshot.forEach((doc) => doc.ref.update({ email })))
          .catch((err) => setError(err.message));
      }
    }
  } catch (error) {
    setError(error);
  }
};
