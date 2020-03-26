import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBZbNRntSMfpZsQvTjhVx9Gq3sxA2sTgy4',
  authDomain: 'crwn-db-fb83f.firebaseapp.com',
  databaseURL: 'https://crwn-db-fb83f.firebaseio.com',
  projectId: 'crwn-db-fb83f',
  storageBucket: 'crwn-db-fb83f.appspot.com',
  messagingSenderId: '97297516475',
  appId: '1:97297516475:web:47bf2b9748ba4ff0ffe69e',
  measurementId: 'G-CT7EMDEM1D'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //If the user doesn't exist, create a new one on the DB
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
