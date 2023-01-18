import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>CHAT APP</h1>
      {user ? (
        <button onClick={signOut} className="sign-out-nav" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in-nav" onClick={googleSignIn}>
          Sign In with Google
        </button>
      )}
    </nav>
  );
};

export default NavBar;
