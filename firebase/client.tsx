import firebase from "firebase/app";
import "firebase/auth"; // If you need it
import "firebase/firestore"; // If you need it

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check that `window` is in scope for the analytics module!
if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
  // firebase.functions().useFunctionsEmulator("http://localhost:5001");
  // firebase.firestore().settings({ host: "localhost:8080", ssl: false });

  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
  //   if ('measurementId' in clientCredentials) firebase.analytics()
}

export default firebase;
