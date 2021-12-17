import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBH9roWee1cpOlEa4z0MqPfpMvZDFrk-s4",
  authDomain: "crwn-db-eed34.firebaseapp.com",
  projectId: "crwn-db-eed34",
  storageBucket: "crwn-db-eed34.appspot.com",
  messagingSenderId: "1070500462150",
  appId: "1:1070500462150:web:d0173700425658d1031447"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.error('Error creating user: ', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;