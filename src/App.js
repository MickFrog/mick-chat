import React, { useEffect, useState } from "react";
import { auth } from './firebase.config'
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import SidebarComponent from './components/Chat/SidebarComponent';
import ChatArea from "./components/Chat/ChatArea";

//context to provide app wide values
export const AppContext = React.createContext();

function App() {
  //controller to navigate user to different page
  const navigateController = useNavigate();

  const [ theme, setTheme ] = useState(null); //state to keep track of current theme

  const logOutUser = async () => {
    try {
      await signOut(auth);
      navigateController('/');
    } catch (err) {
      console.error(err);
      alert('Failed to Log Out');
    }
  }

  //useEffect to check preferred user scheme
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      return;
    }

    setTheme('light');  
  }, []);

  //useEffect to handle themeSwitching
  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
      return;
    }
    
    document.documentElement.classList.remove('dark');
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  
  return (
    <AppContext.Provider value={{logOutUser, theme, handleThemeSwitch}}>
      <div className=" h-screen text-3xl grid grid-cols-[28rem_1fr]">
        <SidebarComponent />
        <ChatArea />
      </div>
    </AppContext.Provider>
  );
  
}

export default App;
