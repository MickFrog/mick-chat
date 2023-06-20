import React from "react";
import { auth } from './firebase.config'
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import ChatToast from "./components/ChatToast";

function App() {
  //controller to navigate user to different page
  const navigateController = useNavigate();

  const logOutUser = async () => {
    try {
      await signOut(auth);
      navigateController('/');
    } catch (err) {
      console.error(err);
      alert('Failed to Log Out');
    }
  }

  return (
    <div className="text-3xl font-bold underline">

      <ChatToast toastMsg="Signed in successfully" />

      <button className="btn" onClick={logOutUser}>
        SignOut</button>
    </div>
  );
}

export default App;
