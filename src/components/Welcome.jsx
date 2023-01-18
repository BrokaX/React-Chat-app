import React from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Simple Chat app Built with React and FireBase</h2>
      <p>Sign in with Google.</p>
      <button className="sign-in" onClick={googleSignIn}>
        Sign In with Google
      </button>
    </main>
  );
};

export default Welcome;
