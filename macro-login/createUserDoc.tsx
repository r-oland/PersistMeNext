import firebase from "firebase/app";

export const createUserDoc = async (
  data: { name: string; email: string; activities: any; dayTypes: any },
  uid: string | undefined
) => {
  const { name, email, activities, dayTypes } = data;

  try {
    firebase.firestore().collection("users").doc(uid).set({
      userId: uid,
      name,
      email,
      subscriptionDate: new Date(),
      activities,
      dayTypes,
    });
  } catch (error) {
    console.log(error);
  }
};
