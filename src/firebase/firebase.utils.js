import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"


const config = {
    apiKey: "AIzaSyAzUy9qYP4K0AkBC_dm9ZhjZBByg-D6rp0",
    authDomain: "crwn-30306.firebaseapp.com",
    databaseURL: "https://crwn-30306.firebaseio.com",
    projectId: "crwn-30306",
    storageBucket: "crwn-30306.appspot.com",
    messagingSenderId: "226599216577",
    appId: "1:226599216577:web:f5e9c09dc9d882dc00bb40",
    measurementId: "G-ZZBL7DL7WJ"
  };

firebase.initializeApp(config)

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
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;