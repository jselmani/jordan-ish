import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  getDocs,
  collection,
  doc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAkbkf44jJ1a6UbYihX5l2CeNZ1ZFK2B4",
  authDomain: "jordan-ish.firebaseapp.com",
  projectId: "jordan-ish",
  storageBucket: "jordan-ish.appspot.com",
  messagingSenderId: "334237205687",
  appId: "1:334237205687:web:3c459a3ccfd94054e83932",
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", `${userAuth.uid}`);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(
        userRef,
        {
          displayName,
          email,
          createdAt,
          ...data,
        },
        { merge: true }
      );
    } catch (err) {
      console.log("Error creating user: ", err.message);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export async function getShoes(db) {
  const shoesCollection = collection(db, "shoes");
  const shoesSnapshot = await getDocs(shoesCollection);
  const shoeList = shoesSnapshot.docs.map((doc) => doc.data());
  return shoeList;
}

export async function getShoe(db, shoeId) {
  const q = query(
    collection(db, "shoes"),
    where("id", "array-contains", shoeId)
  );
  const querySnapshot = await getDocs(q);
  const shoe = querySnapshot.docs.map((doc) => doc.data());
  return shoe;
}

export default firebase;
