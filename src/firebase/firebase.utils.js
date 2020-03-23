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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
