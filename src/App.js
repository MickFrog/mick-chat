import React from "react";
import { auth } from './firebase.config'
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import ChatToast from "./components/ChatToast";
import SidebarComponent from './components/Chat/SidebarComponent';
import ChatArea from "./components/Chat/ChatArea";

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
    <div className=" h-screen text-3xl font-bold underline grid grid-cols-[1fr_2fr]">
      <ChatToast toastMsg="Signed in successfully" />

      <SidebarComponent logOutCall={logOutUser}/>
      <ChatArea />
    </div>
  );
}

export default App;
