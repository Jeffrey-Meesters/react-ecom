import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAH_0N-x3zcnGQR7O9Vk-AcctuB6ut5yFw",
  authDomain: "ecom-fc32e.firebaseapp.com",
  databaseURL: "https://ecom-fc32e.firebaseio.com",
  projectId: "ecom-fc32e",
  storageBucket: "ecom-fc32e.appspot.com",
  messagingSenderId: "642510356436",
  appId: "1:642510356436:web:a865097fb6727a9c74a041",
  measurementId: "G-CVTWQXPF44"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// Always trigger the google popup when we use the GoogleAuthProvider
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
