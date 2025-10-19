import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();
const FirebaseAuthProvider = ({ children }) => {
  // set User
  const [user, setUser] = useState(null);

  //   set loding
  const [loading, setLoading] = useState(true);

  //   creat user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInUser
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signInWithGoogle
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // signInWithGithib
  const signInWithGithib = () => {
    setLoading(true);
    return signInWithPopup(auth, gitprovider);
  };
  // signOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // onAuthStateChange
  useEffect(() => {
    const unsusCribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      console.log(crueentUser);
      setLoading(false);
    });
    return () => {
      unsusCribe();
    };
  }, []);
  // userInfo
  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    creatUser,
    signInUser,
    logOut,
    signInWithGoogle,
    signInWithGithib,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
