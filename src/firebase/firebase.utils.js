import firebase from "firebase/app";

import 'firebase/firestore';

import 'firebase/auth';

const config={
    apiKey: "AIzaSyBZW73kpPfy2j3siIQ8eGPae-N-8SkTECw",
    authDomain: "food-app-eb2dc.firebaseapp.com",
    databaseURL: "https://food-app-eb2dc.firebaseio.com",
    projectId: "food-app-eb2dc",
    storageBucket: "food-app-eb2dc.appspot.com",
    messagingSenderId: "351041236649",
    appId: "1:351041236649:web:0821913486c01597e483b8",
    measurementId: "G-9B97K0BD45"
  };

  firebase.initializeApp(config);
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
