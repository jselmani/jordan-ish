import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAkbkf44jJ1a6UbYihX5l2CeNZ1ZFK2B4",
  authDomain: "jordan-ish.firebaseapp.com",
  projectId: "jordan-ish",
  storageBucket: "jordan-ish.appspot.com",
  messagingSenderId: "334237205687",
  appId: "1:334237205687:web:3c459a3ccfd94054e83932",
};

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
