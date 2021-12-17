import { useState, useEffect } from 'react';
import { auth } from './firebase.utils';

const useGoogleUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setCurrentUser);
    return unsubscribe;
  }, []);
  return currentUser;
}

export default useGoogleUser;