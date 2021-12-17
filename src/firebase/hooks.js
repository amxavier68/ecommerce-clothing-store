import { useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase.utils';

const useGoogleUser = () => {
  
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function unscribeUser() {
      createUserProfileDocument(currentUser);
      console.log(currentUser);
      const unsubscribe = await auth.onAuthStateChanged(setCurrentUser);
      return unsubscribe;
    }
    unscribeUser();
  }, []);
  
  return currentUser;

}

export default useGoogleUser;