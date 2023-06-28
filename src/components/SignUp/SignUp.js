import React, { useEffect, useRef, useState } from "react";
import { auth, googleProvider, fireDB } from "../../firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import LogoComp from "./logoComp";
import { Spinner } from "flowbite-react";

const SignUp = () => {
  //currently logged in user
  const user = useRef(null);
  const [loading, setLoading] = useState(false);

  const navigateController = useNavigate();

  const signInUser = async () => {
    try {
      setLoading(true); //load spinner on button

      //navigate to chat page on successful login
      await signInWithPopup(auth, googleProvider);

      //check whether user registered in user + userChats collections
      const docRef = doc(fireDB, "user", auth.currentUser?.uid);
      const userChatsDocRef = doc(fireDB, "userChats", auth.currentUser?.uid);

      const userDocSnap = await getDoc(docRef);
      const userChatsDocSnap = await getDoc(userChatsDocRef);

      //register user if not registered
      if (!userDocSnap.exists()) {
        await setDoc(doc(fireDB, "user", auth.currentUser?.uid), {
          //register user in user collection
          displayName: auth.currentUser?.displayName,
          photoURL: auth.currentUser?.photoURL,
          email: auth.currentUser?.email,
          userID: auth.currentUser?.uid,
        });
      }

      if (!userChatsDocSnap.exists()) {
        await setDoc(doc(fireDB, "userChats", auth.currentUser?.uid), {}); //to store chat info about a user
      }

      navigateController("/chat"); //onSuccess navigate to chats page
    } catch (err) {
      console.error(err);
      alert("Failed to sign in");
    }

    setLoading(false); //remove spinner
  };

  useEffect(() => {
    //update user on first render
    user.current = auth.currentUser;
  }, []);

  return (
    <div className=" bg-blue-400 h-screen flex flex-col items-center pt-[15%]">
      {user.current && <Navigate to="/chat" />}

      <div className="flex flex-col gap-3 items-center bg-blue-600 rounded p-10">
        <LogoComp />

        <button
          disabled={loading}
          className={
            loading ? "btn btn-blue cursor-not-allowed" : "btn btn-blue"
          }
          onClick={signInUser}
        >
          {loading ? (
            <div>
              <Spinner />
              <span className="px-2">Signing in...</span>
            </div>
          ) : (
            "Sign In With Google"
          )}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
