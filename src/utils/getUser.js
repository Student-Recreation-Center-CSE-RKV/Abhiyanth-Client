import { getAuth, onAuthStateChanged } from "firebase/auth";


export const getUser = () => {
  return new Promise((resolve, reject) => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); 
      resolve(user);
      console.log(user)
    }, reject);
  });
};
