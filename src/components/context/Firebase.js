import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getDatabase, ref, set } from "firebase/database";
import React, { createContext, useContext, useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAXPnMCzgm36SNJDD-q_Z-z0oBOFwlLpP0",
  authDomain: "apprex-practice.firebaseapp.com",
  projectId: "apprex-practice",
  storageBucket: "apprex-practice.appspot.com",
  messagingSenderId: "776216721034",
  appId: "1:776216721034:web:530cec631b77f8ff1a1f73",
  measurementId: "G-52M17V0V86",
  databaseURL:
    "https://apprex-practice-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);
const FirebaseContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

// This Is My Custom Hook .....start..
export const useFirebase = () => useContext(FirebaseContext);
// This Is My Custom Hook .....End..

//This is My Custom Firebase provider ....Start..
export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  const SignupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SigninUserWithEmailAndPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const putData = (key, data) => set(ref(db, key), data);
  const signinWithGoogle = () => signInWithPopup(auth, googleProvider);
  const isLoggedIn = user ? true : false;
  return (
    <FirebaseContext.Provider
      value={{
        SignupUserWithEmailAndPassword,
        SigninUserWithEmailAndPass,
        putData,
        signinWithGoogle,
        isLoggedIn,
        auth,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
//This is My Custom Firebase provider ....End..
